import React, { useState } from "react";
import "./hamburger.css"

import second_chair from "../Assets/2ndchair.png";
import call_icon from "../Assets/call.png";
import call_svg from "../Assets/call.svg";
import circle_icon from "../Assets/circle.svg";
import dots_icon from "../Assets/dots.png";
import Group_1_icon from "../Assets/Group 1.svg";
import house_svg from "../Assets/house.svg";
import location_icon from "../Assets/location.svg";
import luxury_footer_icon from "../Assets/Luxury-footer.svg";
import luxury_icon from "../Assets/Luxury.png";
import png_1_icon from "../Assets/pngwing 1.png";
import png_2_icon from "../Assets/pngwing 2.png";
import return_icon from "../Assets/return.svg";
import truck_icon from "../Assets/truck.svg";
import office_image from "../Assets/OFFICE.png";
import email_icon from "../Assets/Group 3.png";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="hamburger-menu">
        <img src={luxury_icon} alt="logo" />
      <div className={`menu-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
