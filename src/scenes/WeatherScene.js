import React from "react";
import WeatherBlock from "../components/WeatherBlock";
import "./weatherScene.css";

export default class WeatherScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: []
    };
  }

  fetchData = () => {
    const apiKey = "1c28d24177e115bd0233c20f72193c2f";
    const city = "Antwerp";
    fetch(
      `api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${apiKey}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          data: data
        }).catch(error =>
          this.setState({
            error,
            isLoaded: false
          })
        );
      });
  };

  componentDidMount() {
    this.setState({
      isLoaded: false,
      data: null
    });

    this.fetchData();
  }

  render() {
    // const { data } = this.state;

    return (
      <div>
        <h1>Weather forecast Antwerp</h1>
        <div className="weatherContainer">
          <WeatherBlock
            day="Monday"
            weatherIcon="cloud-lightning"
            alt="Cloud-lightning"
            highTemp="83"
            lowTemp="66°"
          />
          <WeatherBlock
            day="Tuesday"
            weatherIcon="partly-cloudy-day"
            alt="Partly-Cloudy"
            highTemp="78"
            lowTemp="67°"
          />
          <WeatherBlock
            day="Wednesday"
            weatherIcon="rainy-weather"
            alt="Rainy-Weather"
            highTemp="77"
            lowTemp="65°"
          />
          <WeatherBlock
            day="Thursday"
            weatherIcon="summer"
            alt="Summer"
            highTemp="71"
            lowTemp="61"
          />
          <WeatherBlock
            day="Friday"
            weatherIcon="sun"
            alt="Sun"
            highTemp="70"
            lowTemp="60°"
          />
          <WeatherBlock
            day="Saturday"
            weatherIcon="windy-weather"
            alt="Windy-Weather"
            highTemp="73"
            lowTemp="60°"
          />
          <WeatherBlock
            day="Sunday"
            weatherIcon="rain"
            alt="Rain"
            highTemp="69"
            lowTemp="61°"
          />
        </div>
      </div>
    );
  }
}
