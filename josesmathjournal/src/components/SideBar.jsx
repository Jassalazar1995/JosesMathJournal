import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Sidebar = ({ subsections }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const NavbarHeight = '138px'; // Nav bar height

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 transition-all duration-300 ease-in-out bg-gray-800 text-white`}
      style={{ top: NavbarHeight, width: isMinimized ? '5rem' : '20rem' }} // sidebar width
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        {!isMinimized && <span className="text-xl font-semibold">Chapters</span>}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          
          style={{ padding: '.5rem' }}
        >
          {/* Toggle icon */}
          {isMinimized ? (
            // Icon for 'open' (right chevron)
            <svg className="h-10 w-10 rounded-full fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M7.05 9.293L6.343 10 12 15.657 17.657 10l-.707-.707L12 14.243z" />
            </svg>
          ) : (
            // Icon for 'close' (left chevron)
            <svg className="h-10 w-10 rounded-full fill-current text-white rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M7.05 9.293L6.343 10 12 15.657 17.657 10l-.707-.707L12 14.243z" />
            </svg>
          )}
        </button>
      </div>
      <div className={`p-4 overflow-y-auto ${isMinimized ? 'hidden' : 'block'}`} style={{ height: `calc(100vh - ${NavbarHeight})` }}>
        <ul>
          {subsections.map((subsection, index) => (
            <li key={index} className="mb-2">
              <NavLink to={subsection.path} className={({ isActive }) => isActive ? 'bg-gray-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}>
                {!isMinimized && subsection.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
