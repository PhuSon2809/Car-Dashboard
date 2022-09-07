import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h2>
          <span>
            <i className="ri-taxi-line"></i>
          </span>{" "}
          UberX
        </h2>
      </div>
      <div className="sidebar_content">
        <div className="menu">
          <ul className="nav_list">
            {navLinks.map((navItem, index) => (
              <li className="nav_item" key={index}>
                <NavLink
                  to={navItem.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav_active nav_link" : "nav_link"
                  }
                >
                  <i className={navItem.icon}></i>
                  {navItem.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-bottom">
          <span>
            <i className="ri-logout-circle-r-line"></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
