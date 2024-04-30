import React, { useState } from "react";
import "./styles.css";

import clear_icon from "./Assets/clear.png";
import cloud_icon from "./Assets/cloud.png";
import drizzle_icon from "./Assets/drizzle.png";
import humidity_icon from "./Assets/humidity.png";
import rain_icon from "./Assets/rain.png";
import search_icon from "./Assets/search.png";
import snow_icon from "./Assets/snow.png";
import wind_icon from "./Assets/wind.png";

const Weather = () => {
  let api_key = "34191f6f8fe7fe9166a6ea442d832e60";
  const [wicon, setWicon] = useState(cloud_icon);
  const search = async () => {
    const element = document.getElementsByClassName("city-input");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °c";
    location[0].innerHTML = data.name;

    const iconCode = data.weather[0].icon;
    switch (iconCode) {
      case "01d":
      case "01n":
        setWicon(clear_icon);
        break;
      case "02d":
      case "02n":
        setWicon(cloud_icon);
        break;
      case "03d":
      case "03n":
        setWicon(drizzle_icon);
        break;
      case "04d":
      case "04n":
        setWicon(drizzle_icon);
        break;
      case "09d":
      case "09n":
        setWicon(rain_icon);
        break;
      case "10d":
      case "10n":
        setWicon(rain_icon);
        break;
      case "13d":
      case "13n":
        setWicon(snow_icon);
        break;
      default:
        setWicon(cloud_icon);
        break;
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <div className="data">
            <img src={humidity_icon} alt="" />
            <div className="humidity-percent">64%</div>
          </div>
          <div className="text">Humidity</div>
        </div>
        <div className="element">
          <div className="data">
            <img src={wind_icon} alt="" />
            <div className="wind-rate">18 km/h</div>
          </div>
          <div className="text">Wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
