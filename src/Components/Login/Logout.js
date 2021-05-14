import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div>
        <h1>Logged out</h1>
        <Link to="/login">Loginagain</Link>
      </div>
    );
  }
}
export default Logout;
