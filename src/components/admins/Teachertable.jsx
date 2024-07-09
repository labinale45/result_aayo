import React from 'react';
import '@/styles/globals.css';
import Link from 'next/link';
export default function Teachertable() {
    return (
        <div className="relative w-full flex flex-col shadow-lg mb-6">
            <div className="flex items-center justify-between px-4">
             <Link href={'./Addteacher'} className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 mt-4  rounded text-sm absolute top-[5%] left-[90%] z-10" >
                 Add Teacher 
                </Link>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex">
                    <table className="min-w-full leading-normal mt-4 z-0">
                        <caption className="font-bold text-xl mb-4 mt-4 text-black-500 text-left w-12">
                            Teacher <br/><br/>
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
                            <tr>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    1
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    Supp
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    sup@gmail.com
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    Female
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    2002-12-23
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    74455
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    Damauli
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    user1
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    pass123
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button className="text-black hover:text-blue-300">
                                        Edit
                                    </button>
                                    <button className="text-black hover:text-blue-300 ml-4">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
