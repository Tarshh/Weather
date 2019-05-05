import React from "react";
import WeatherBlock from "../components/WeatherBlock";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./weatherScene.css";

export default class WeatherScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: [],
      city: "Antwerp"
    };

    this._onSelect = this._onSelect.bind(this);
  }

  fetchData = async () => {
    // const apiKey = "1c28d24177e115bd0233c20f72193c2f";
    const apiKey = "c55a767d38684c4fb37145650190305";
    const response = await fetch(
      // `https://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&APPID=${apiKey}&units=metric`
      `https://api.apixu.com/v1/current.json?key=${apiKey}&q=${this.state.city}`
    );
    const data = await response.json();

    // const slicedItems = data.list.slice(0, 5);
    await this.setState({
      items: data
    });
  };

  async componentWillMount() {
    await this.fetchData();
    await this.setState({
      isLoaded: true
    });

    console.log(this.state.items);
  }

  async _onSelect() {
    console.log(this.state.city);
  }
  render() {
    // const { items } = this.state;
    const { city } = this.state;
    const options = ["Antwerp", "Brussels", "Bruges"];

    return (
      <div>
        <Dropdown
          className="Dropdown"
          options={options}
          onChange={event => this._onSelect()}
          value={city}
          placeholder="Select an option"
        />
        <div className="weatherContainer">
          <WeatherBlock
            day="Today"
            weatherIcon="cloud-lightning"
            alt="Cloud-lightning"
            highTemp="83"
            lowTemp="66°"
          />
          <div className="weatherInfoContainer">
            <p className="WeatherInfoItem">
              Local Time:<span> 21:35 </span>
            </p>
            <p className="WeatherInfoItem">
              Humidity: <span>66%</span>
            </p>
            <p className="WeatherInfoItem">
              Wind Speed: <span>25 kph</span>
            </p>
          </div>
        </div>
        <p>Last updated on: 20:41 </p>
      </div>
    );
  }
}
