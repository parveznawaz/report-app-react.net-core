import React from "react";
import "./Header.css";
import Gs1Logo from "../../images/GS1_Canada.svg";

export default function Header() {
  return (
    <div className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <img src={Gs1Logo} alt="" className="pull-left logo" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <h1>Reports</h1>
            </li>
          </ul>
        </div>
      </nav>
      <div className="toolnavigation"></div>
    </div>
  );
}
