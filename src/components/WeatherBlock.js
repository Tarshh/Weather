import React from "react";
import "./WeatherBlock.css";

export default class WeatherBlock extends React.Component {
  render() {
    const { day, weatherIcon, Temp, Alt } = this.props;

    return (
      <div className="weatherBlockContainer">
        <p>{day}</p>
        <img src={weatherIcon} alt={Alt} />

        <div className="Temp">
          <p>{Temp} ° </p>
        </div>
      </div>
    );
  }
}
