import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let islogged = true;
    if (token == null) {
      islogged: false;
    }

    this.state = {
      islogged,
    };
  }
  render() {
    if (this.state.islogged === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h1>welcome u are logged in</h1>
        <Link to="/signup">Logout</Link>
      </div>
    );
  }
}
export default Admin;
