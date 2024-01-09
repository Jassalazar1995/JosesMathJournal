import { useState } from "react";
import { Link } from "react-router-dom";
//Create a side bar that can be minimized (conditional rendering)
const Sidebar = ({ subsections }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Sidebar
            </button>
            <ul>
                {subsections.map((subsection, index) => (
                    <li key={index}>
                        <Link to={subsection.path}>{subsection.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};