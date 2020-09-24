import React, {
  Component,
  // useState
} from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import {
  Media,
  //   Form,
  //   FormGroup,
  //   FormControl,
  //   Button,
  Link,
} from "react-bootstrap";

class Weathers extends Component {
  state = {
    isLoading: true,
    data: null,
  };

  async componentDidMount() {
    this.getWeatherData("Johannesburg");
  }

  async getWeatherData(_searchTerm) {
    const api_key = process.env.REACT_APP_WEATHER_KEY;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      _searchTerm +
      "&appid=" +
      api_key;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ isLoading: false, data: data });
    console.log(data);
  }

  render() {
    return (
      <div>
        <h3>The city selected for API should be Johannesburg below!</h3>
        <div>
          {this.state.isLoading || !this.state.data ? (
            <ReactLoading type="spin" color="#444" />
          ) : (
            <div>
              <div>City: {this.state.data.name}</div>
              <div>API details console.logged</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Weathers;
