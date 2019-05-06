import React from "react";
import WeatherBlock from "../components/WeatherBlock";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./weatherScene.css";

export default class WeatherScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items: [],
      city: "Antwerp",
      currentTime: null,
      currentDate: null
    };
  }

  fetchData = async () => {
    const apiKey = "c55a767d38684c4fb37145650190305";
    const response = await fetch(
      `https://api.apixu.com/v1/current.json?key=${apiKey}&q=${this.state.city}`
    );
    const data = await response.json();

    await this.setState({
      items: data,
      isLoading: false
    });
  };

  async componentDidMount() {
    await this.fetchData();
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      });
    });
  }

  async onSelect(event) {
    await this.setState({
      city: event
    });
    await this.fetchData();
  }
  render() {
    const { items, city, isLoading } = this.state;
    const options = ["Antwerp", "Brussels", "Paris", "London"];

    // if (!isLoading) {
    //   console.log(items.current);
    // }

    return (
      <>
        {isLoading && <p>Loading weather...</p>}
        {!isLoading && (
          <>
            <Dropdown
              className="Dropdown"
              options={options}
              onChange={event => {
                this.onSelect(event.value);
              }}
              value={city}
              placeholder="Select an option"
            />
            <div className="weatherContainer">
              <WeatherBlock
                day="Now"
                weatherIcon={items.current.condition.icon}
                alt="Cloud-lightning"
                Temp={items.current.temp_c}
              />
              <div className="weatherInfoContainer">
                <p className="WeatherInfoItem">
                  Condition: <span>{items.current.condition.text} </span>
                </p>
                <p className="WeatherInfoItem">
                  Local Time:<span> {this.state.currentTime} </span>
                </p>
                <p className="WeatherInfoItem">
                  Humidity: <span>{items.current.humidity}%</span>
                </p>
                <p className="WeatherInfoItem">
                  Wind Speed: <span>{items.current.wind_kph} kph</span>
                </p>
              </div>
            </div>
            <p className="Update">
              Last updated on: {items.current.last_updated}
            </p>
          </>
        )}
      </>
    );
  }
}
