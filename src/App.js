import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./UserForm";
import Weathers from "./Weathers";
import GitHub from "./GitHub";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserForm />
        <GitHub /> */}
        <Weathers />
      </div>
    );
  }
}

export default App;
