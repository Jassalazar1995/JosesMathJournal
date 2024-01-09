import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Sidebar = ({ subsections }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
      <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '<<' : '>>'}
      </button>
      <div className="sidebar-content">
        <ul>
          {subsections.map((subsection, index) => (
            <li key={index}>
              {/* NavLink here for each sidebar item, in future will link to different parts of the page */}
              <NavLink 
                to={subsection.path} 
                activeClassName="active"
              >
                {subsection.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;