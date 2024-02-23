import React from "react";
import { CiSearch } from "react-icons/ci";
import "./styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="nav-menu">
        <div className="nav-search">
          <CiSearch className="search-icon" />
          <input type="text" className="nav-input" />
        </div>
        <p className="nav-items">Categories</p>
        <p className="nav-items">Website Builder</p>
        <p className="nav-items">Today deals</p>
      </div>
    </div>
  );
}

export default Header;
