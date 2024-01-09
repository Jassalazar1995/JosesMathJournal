import { Link } from "react-router-dom";
import PomodoroClock from "./PomodoroClock";


export default function Nav() {
    return (
        <div className="nav">
            <Link to='/'> 
                <div>Home</div>
            </Link>
            <Link to='/Functanal'>
                <div>Functional Analysis</div>
            </Link>
            <Link to='/DiffGeo'>
                <div>Differential Geometry</div>
            </Link>
            <PomodoroClock />
        </div>
    )
}