"use client";

import React, { useState } from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";

const Menu = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for tracking dark mode

  const handleMouseEnter = () => setIsSidebarClosed(false);
  const handleMouseLeave = () => setIsSidebarClosed(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { name: "Home", icon: "/assets/Home.png" },
    { name: "Teacher", icon: "/assets/Teacher.png" },
    { name: "Student", icon: "/assets/Student.png" },
    { name: "Exams", icon: "/assets/Ledger.png" },
    { name: "Ledger", icon: "/assets/Ledger.png" },
    { name: "Class", icon: "/assets/Class.png" },
    { name: "Notice", icon: "/assets/Notice.png" },
  ];

  return (
    <div className={`flex ${isDarkMode ? "dark" : ""}`}>
      <nav
        className={`fixed top-0 left-0 h-full ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
        } ${isSidebarClosed ? "w-24" : "w-64"} transition-all duration-500`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="logo" className="w-10 h-10 rounded" />
            {!isSidebarClosed && (
              <div className="ml-3">
                <span className={`text-lg font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
                  Result Aayo
                </span>
              </div>
            )}
          </div>
          <button className={`text-white ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`} onClick={toggleDarkMode}>
            {isDarkMode ? "Light" : "Dark"} Mode
          </button>
          <FiChevronRight
            className={`transform ${isSidebarClosed ? "" : "rotate-180"}`}
          />
        </header>

        <div className="flex flex-col justify-between h-full">
          <ul className="flex-grow">
            <li className="flex items-center bg-gray-700 rounded-lg m-2 p-2">
              <FiSearch className="text-white" />
              {!isSidebarClosed && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-white ml-2 w-full outline-none"
                />
              )}
            </li>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center bg-gray-700 hover:bg-gray-600 rounded-lg m-2 p-2 transition-colors ${
                  !isSidebarClosed ? "cursor-pointer" : ""
                }`}
              >
                {!isSidebarClosed && (
                  <span className={`ml-2 g${isDarkMode ? "text-gray-300" : "text-white"}`}>
                    {item.name}
                  </span>
                )}
                <img src={item.icon} alt={`${item.name} icon`} className="w-6 h-6 ml-2" />
              </li>
            ))}
          </ul>
          <ul>
            <li className="flex items-center bg-gray-700 hover:bg-gray-600 rounded-lg m-2 p-2 transition-colors">
              <img src="/assets/Class.png" alt="Logout icon" className="w-6 h-6" />
              {!isSidebarClosed && (
                <span className={`ml-2 ${isDarkMode ? "text-gray-300" : "text-white"}`}>
                  Logout
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <section
        className={`flex-grow p-8 ${
          isSidebarClosed ? "ml-24" : "ml-64"
        } transition-all duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"}`}
      >
        <div className={`text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
          Dashboard
        </div>
      
      </section>
    </div>
  );
};

export default Menu;
