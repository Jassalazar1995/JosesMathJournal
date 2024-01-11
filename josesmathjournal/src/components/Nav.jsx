import { Link } from "react-router-dom";
import PomodoroClock from "./PomodoroClock";

export default function Nav() {
    return (
        // Using Tailwind CSS for styling
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
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
            </div>
            <PomodoroClock />
        </nav>
    )
}
