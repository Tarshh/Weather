import React from "react";
import "./WeatherBlock.css";

export default class WeatherBlock extends React.Component {
  render() {
    const { day, weatherIcon, alt, highTemp, lowTemp } = this.props;

    return (
      <div className="weatherBlockContainer">
        <p>{day}</p>
        <img
          src={require("../assets/weatherIcons/" + weatherIcon + ".png")}
          alt={alt}
        />
        {
          <div>
            <span className="highTemp">{lowTemp}</span>
            <span className="lowTemp">{highTemp}</span>
          </div>
        }
      </div>
    );
  }
}
