import React, { Component } from "react";
import "./Home.css";
import { Route, Switch } from "react-router-dom";
import Homes from "./Homes";
import NeilsKitchen from "../Components/NeilsKitchen/NeilsKitchen";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Switch>
          <Route path="/" exact component={Homes} />
          <Route path="/neilskitchen" component={NeilsKitchen} />
        </Switch>
      </div>
    );
  }
}

export default Home;
