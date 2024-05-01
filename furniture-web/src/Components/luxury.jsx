import React from "react";
import "./luxury.css";

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

const Luxury = () => {
  return (
    <div className="container">
      <div className="navigation">
        <img src={luxury_icon} alt="logo" />
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
        <button className="button">Contact</button>
      </div>
      <div className="hero">
        <div className="text">
          <h3>TRENDY COLLECTIONS</h3>
          <h1>
            Make your <span>interior</span> unique & modern
          </h1>
          <p>
            Turn your room with luxury into a lot more minimalist and modern.
          </p>
          <button className="button">Discover More</button>
        </div>
        <div className="hero-image">
          <img src={png_2_icon} alt="" />
        </div>
      </div>
      <div className="trending">
        <h1>
          Trending <span>Products</span>
        </h1>
        <p className="para">
          Turn your room with luxury into a lot more minimalist and modern.
        </p>
        <div className="sofa-container">
          <div className="sofa">
            <div className="text">
              <h4>Long Sofa</h4>
              <p>Structure almost highlights</p>
              <a href="#">SHOP NOW</a>
            </div>
            <div className="sofa-img">
              <img src={second_chair} alt="" />
            </div>
          </div>
          <div className="sofa-2">
            <div className="text">
              <h4>Long Sofa</h4>
              <p>Structure almost highlights</p>
              <a href="#">SHOP NOW</a>
            </div>
            <div className="sofa-img">
              <img src={png_1_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
