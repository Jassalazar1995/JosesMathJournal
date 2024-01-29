import { Link } from "react-router-dom";
import PomodoroClock from "./PomodoroClock";

export default function Nav() {
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
        <Link to='/register' className="hover:text-gray-300">
          <div>Register</div>
        </Link>
        <Link to='/Login' className="hover:text-gray-300">
          <div>Login</div>
        </Link>
        <Link to='/Blog' className="hover:text-gray-300">
          <div>Blog</div>
        </Link>
        <Link to='/Profile' className="hover:text-gray-300">
          <div>Profile</div>
        </Link>
        <Link to='/Donate' className="hover:text-gray-300">
          <div>Donate</div>
        </Link>
      </div>
      <PomodoroClock />
    </nav>
  )
}
