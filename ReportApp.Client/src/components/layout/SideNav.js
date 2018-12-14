import React from "react";
import "./SideNav.css";
import icon from "../../images/product_management.svg";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="main-menu-fixed">
      <ul className="ul-menu">
        <li>
          <Link to="/reports">
            <Tooltip title="Home Page" placement="right">
              <img src={icon} alt="Home" className="image-menu-svg-24" />
            </Tooltip>
          </Link>
        </li>
      </ul>
    </div>
  );
}
