import React from "react";
import "./footer.css";

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

const Footer = () => {
  return (
    <div className="footer">
      <div className="first">
        <div className="left">
          <img src={luxury_footer_icon} alt="" />
          <p>
            Turn your room with luxury into a lot more minimalist and modern.
          </p>
        </div>
        <div className="right">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Services</li>
            </a>
            <a href="#">
              <li>Blogs</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="second">
        <p>@2024 Luxury. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
