// Sidebar.jsx
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { TrendingUp, Inventory2 } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Menu</h2>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <Link to="/fertilizers" className="link">
              <li className="sidebarListItem">
                <Inventory2 className="sidebarIcon" />
                Fertilizers
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
