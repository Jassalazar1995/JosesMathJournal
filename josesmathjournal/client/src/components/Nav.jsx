import { Link } from "react-router-dom";
import PomodoroClock from "./PomodoroClock";
import { useState } from 'react';

export default function Nav({ username, setUser }) {
  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
  };

  // State to control the dropdown display
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
      <div className="flex gap-4">
        <Link to='/' className="hover:text-gray-300">
          <div>Home</div>
        </Link>
        
        {/* Dropdown Menu for Courses */}
        <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <button className="hover:text-gray-300">Courses</button>
          {isDropdownOpen && (
            <div className="absolute bg-gray-700 shadow-lg rounded">
              <Link to='/Functanal' className="hover:text-gray-300 block px-4 py-2">Functional Analysis</Link>
              <Link to='/DiffGeo' className="hover:text-gray-300 block px-4 py-2">Differential Geometry</Link>
            </div>
          )}
        </div>

        <Link to='/blog' className="hover:text-gray-300">
          <div>Blog</div>
        </Link>
      </div>
      {/* Conditional logic for logged in */}
      <div className="flex gap-4">
        {username ? (
          <>
            <Link to="/profile" className="hover:text-gray-300">Profile</Link>
            <span>Welcome, {username}!</span>
            <Link to="/login" onClick={logout} className="hover:text-gray-300">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
            <Link to="/register" className="hover:text-gray-300">Register</Link>
          </>
        )}
      </div>

      <PomodoroClock />
    </nav>
  );
}
