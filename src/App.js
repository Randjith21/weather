import React, { Component } from "react";

import Searchform from "./Searchform";
import Board from "./Board";

import { api } from "./config";

import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      weather: false,
      forecast: false,
      location: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async fetchCurrentWeather(location) {
    const req = await fetch(
      `${api.apiBaseURL}weather?q=${location}${api.apiBaseParams}`
    );
    const weather = await req.json();

    return weather;
  }

  async fetchForecast(location) {
    const req = await fetch(
      `${api.apiBaseURL}forecast/daily?q=${location}&cnt=5${api.apiBaseParams}`
    );
    const forecast = await req.json();

    return forecast;
  }

  async fetchAllData(location) {
    this.setState({
      isLoading: true
    });

    const weather = await this.fetchCurrentWeather(location);
    const forecast = await this.fetchForecast(location);
    this.setState({
      isLoading: false,
      location,
      weather,
      forecast
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const location = data.get("location");

    this.fetchAllData(location);
  }

  render() {
    const { isLoading, weather, forecast, location } = this.state;
    return (
      <div className="wrapper">
        <Searchform handleSubmit={this.handleSubmit} />
        {isLoading && <p>Fetching weather ...</p>}
        {!isLoading && weather && (
          <Board weather={weather} forecast={forecast} location={location} />
        )}
      </div>
    );
  }
}

export default App;
