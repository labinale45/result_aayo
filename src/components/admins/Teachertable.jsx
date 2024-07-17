
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from '@/utils/client';
import '@/app/styles/globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Teachertable() {
    const [teachers, setTeachers] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentTeacher, setCurrentTeacher] = useState(null);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        const { data, error } = await supabase
            .from('teachers')
            .select('*');

        if (error) {
            console.error('Error fetching teachers:', error);
            toast.error('Error fetching teachers');
        } else {
            setTeachers(data);
            toast.success('Teachers fetched successfully');
        }
    };

    const deleteTeacher = async (id) => {
        const { error } = await supabase
            .from('teachers')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting teacher:', error);
            toast.error('Error deleting teacher');
        } else {
            setTeachers(teachers.filter(teacher => teacher.id !== id));
            toast.success('Teacher deleted successfully');
        }
    };

    const handleEditClick = (teacher) => {
        setCurrentTeacher(teacher);
        setEditMode(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setCurrentTeacher((prevTeacher) => ({ ...prevTeacher, [name]: value }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const { id, ...updatedData } = currentTeacher;

        const { error } = await supabase
            .from('teachers')
            .update(updatedData)
            .eq('id', id);

        if (error) {
            console.error('Error updating teacher:', error);
            toast.error('Error updating teacher');
        } else {
            setTeachers(teachers.map(teacher => (teacher.id === id ? currentTeacher : teacher)));
            setEditMode(false);
            toast.success('Teacher updated successfully');
        }
    };

    return (
        <div className="relative w-full flex flex-col shadow-lg mb-6">
            <ToastContainer />
            <div className="flex items-center justify-between px-4">
                <Link href="/admins/addteachers" className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 mt-4 rounded text-sm absolute top-[5%] left-[90%] z-10">
                    Add Teacher
                </Link>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex">
                    <table className="min-w-full leading-normal mt-4 z-0">
                        <caption className="font-bold text-xl mb-4 mt-4 text-black-500 text-left w-12">
                            Teacher <br /><br />
                        </caption>
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    E-mail
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Gender
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    DOB
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Address
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Username
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Password
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map((teacher) => (
                                <tr key={teacher.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.id}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.Fullname}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.Email}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.Gender}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.DOB}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.Contact}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.Address}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.Username}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {teacher.Password}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button 
                                            className="text-black hover:text-blue-300"
                                            onClick={() => handleEditClick(teacher)}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className="text-black hover:text-blue-300 ml-4"
                                            onClick={() => deleteTeacher(teacher.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {editMode && currentTeacher && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <form onSubmit={handleEditSubmit}>
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="Fullname"
                                    value={currentTeacher.Fullname}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border"
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="Email"
                                    value={currentTeacher.Email}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border"
                                />
                            </div>
                            <div>
                                <label>Gender</label>
                                <input
                                    type="text"
                                    name="Gender"
                                    value={currentTeacher.Gender}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border"
                                />
                            </div>
                            <div>
                                <label>DOB</label>
                                <input
                                    type="text"
                                    name="DOB"
                                    value={currentTeacher.DOB}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border"
                                />
                            </div>
                            <div>
                                <label>Contact</label>
                                <input
                                    type="text"
                                    name="Contact"
                                    value={currentTeacher.Contact}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border"
                                />
                            </div>
                            <div>
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="Address"
                                    value={currentTeacher.Address}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border"
                                />
                            </div>
                            <div>
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="Username"
                                    value={currentTeacher.Username}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border"
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input
                                    type="text"
                                    name="Password"
                                    value={currentTeacher.Password}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border"
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditMode(false)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

