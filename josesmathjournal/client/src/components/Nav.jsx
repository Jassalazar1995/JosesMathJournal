import { Link } from "react-router-dom";
import PomodoroClock from "./PomodoroClock";

export default function Nav({ username, setUser }) {
  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-40">
      
      <div className="flex gap-4">
        <Link to='/' className="hover:text-gray-300">
          <div>Home</div>
        </Link>
        <Link to='/Functanal' className="hover:text-gray-300">
          <div>Functional Analysis</div>
        </Link>
        <Link to='/DiffGeo' className="hover:text-gray-300">
          <div>Differential Geometry</div>
        </Link>
        <Link to='/blog' className="hover:text-gray-300">
          <div>Blog</div>
        </Link>
        <Link to='/Donate' className="hover:text-gray-300">
          <div>Donate</div>
        </Link>
      </div>
      {/* Wrapping the right-aligned items in a div */}
      <div className="flex gap-4">
        {username ? (
          <>
            <Link to="/profile" className="hover:text-gray-300">Profile</Link>
            <p>Welcome, {username}!</p>
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
