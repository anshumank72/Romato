import React, { Component } from "react";
import "./App.css";
import Home from "./Container/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
