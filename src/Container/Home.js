import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homes from "./Homes";
import NeilsKitchen from "../Components/NeilsKitchen/NeilsKitchen";
import NeilsProductDetail from "../Components/NeilsKitchen/NeilsCard/NeilsProductDetail/NeilsProductDetail";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Switch>
          <Route path="/" exact component={Homes} />
          <Route path="/neilskitchen" exact component={NeilsKitchen} />
          <Route path="/neilskitchen/:id" component={NeilsProductDetail} />
        </Switch>
      </div>
    );
  }
}

export default Home;
