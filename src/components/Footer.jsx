import React from "react";
import "./styles/Footer.scss";
import { FaAngleDown } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-menu">
        <h3 className="footer-head">Categories</h3>
        <ul className="footer-list">
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic Automation</li>
        </ul>
      </div>
      <div className="footer-menu">
        <h3 className="footer-head">Contact</h3>
        <ul className="footer-list">
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className="countries">
        <p className="us">Unites States</p>
        <FaAngleDown className="footer-down" />
      </div>
    </div>
  );
}

export default Footer;
