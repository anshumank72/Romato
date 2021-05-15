import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homes from "./Homes";
import NeilsKitchen from "../Components/NeilsKitchen/NeilsKitchen";
import NeilsProductDetail from "../Components/NeilsKitchen/NeilsCard/NeilsProductDetail/NeilsProductDetail";
import Login from "../Components/Login/Login";
import Signup from "../Components/Login/Signup";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Switch>
          <Route path="/" exact component={Homes} />
          <Route path="/neilskitchen" exact component={NeilsKitchen} />
          <Route path="/neilskitchen/:id" component={NeilsProductDetail} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default Home;
