export function Examtable() {
    return (
        <div className="relative w-full flex flex-col shadow-lg mb-6">
            <div className="flex items-center justify-between px-4">
             
                <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 mt-4  rounded text-sm absolute top-[5%] left-[90%]" >
                    Create Exam
                </button>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex">
                    <table className="min-w-full leading-normal mt-4">
                        <caption className="font-bold text-xl mb-4 mt-4 text-black-500 text-left">
                            Exam <br/><br/>
                        </caption>
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Exam Type
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Class
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Select Starting Date
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-400 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Select Ending Date
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
                                    74455
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    Damauli
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    Supriya
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
