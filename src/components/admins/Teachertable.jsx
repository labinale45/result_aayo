// 'use client';

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import supabase from '@/utils/client';
// import '@/app/styles/globals.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Teachertable() {
//     const [teachers, setTeachers] = useState([]);

//     useEffect(() => {
//         fetchTeachers();
//     }, []);

//     const fetchTeachers = async () => {
//         const { data, error } = await supabase
//             .from('teachers')
//             .select('*');

//         if (error) {
//             console.error('Error fetching teachers:', error);
//             toast.error('Error fetching teachers');
//         } else {
//             setTeachers(data);
//             toast.success('Teachers fetched successfully');
//         }
//     };

//     return (
//         <div className="relative w-full flex flex-col shadow-lg mb-6">
//             <ToastContainer />
//             <div className="flex items-center justify-between px-4">
//                 <Link href="/admins/addteachers" className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 mt-4 rounded text-sm absolute top-[5%] left-[90%] z-10">
//                     Add Teacher
//                 </Link>
//             </div>
//             <div className="flex flex-wrap items-center">
//                 <div className="relative w-full px-4 max-w-full flex-grow flex">
//                     <table className="min-w-full leading-normal mt-4 z-0">
//                         <caption className="font-bold text-xl mb-4 mt-4 text-black-500 text-left w-12">
//                             Teacher <br /><br />
//                         </caption>
//                         <thead>
//                             <tr>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     ID
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     Name
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     E-mail
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     Gender
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     DOB
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     Contact
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     Address
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     Username
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     Password
//                                 </th>
//                                 <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
//                                     Action
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {teachers.map((teacher) => (
//                                 <tr key={teacher.id}>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.id}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.Fullname}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.Email}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.Gender}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.DOB}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.Contact}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.Address}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.Username}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         {teacher.Password}
//                                     </td>
//                                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//                                         <button className="text-black hover:text-blue-300">
//                                             Edit
//                                         </button>
//                                         <button className="text-black hover:text-blue-300 ml-4">
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from '@/utils/client';
import '@/app/styles/globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Teachertable() {
    const [teachers, setTeachers] = useState([]);

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
                                            onClick={() => deleteTeacher(teacher.id)}
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
        </div>
    );
}
