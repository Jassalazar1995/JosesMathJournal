import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Sidebar = ({ subsections }) => {
  const [isVisible, setIsVisible] = useState(true);
  const NavbarHeight = '64px'; // Adjust this to match the actual height of your Nav component

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} w-64 z-30 transition duration-300 ease-in-out bg-gray-800 text-white h-full pt-16`} style={{ top: '64px' }}> {/* Adjust top to the height of the navbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <span className="text-xl font-semibold">Chapters</span>
        <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-200">
          {/* SVG for closing icon */}
        </button>
      </div>
      <div className="p-4">
        <ul>
          {subsections.map((subsection, index) => (
            <li key={index} className="mb-2">
              <NavLink to={subsection.path} className={({ isActive }) => isActive ? 'bg-gray-700' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}>
                {subsection.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {!isVisible && (
        <button
          className="absolute top-0 left-full transform -translate-x-full bg-gray-800 text-white p-4 focus:outline-none"
          onClick={() => setIsVisible(true)}
          style={{ top: NavbarHeight }}
        >
          {'>>'}
        </button>
      )}
    </div>
  );
};

export default Sidebar;
