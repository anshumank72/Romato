import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    localStorage.removeItem("login-info");
  }
  render() {
    return (
      <div>
        <h1>Thanks for using romato</h1>
        <Link to="/logout" onClick={this.clickHandler}>
          Logout
        </Link>
      </div>
    );
  }
}
export default Logout;
