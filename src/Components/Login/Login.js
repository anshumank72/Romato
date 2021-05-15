import React, { Component } from "react";
import Logout from "./Logout";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernamelog: "",
      passwordlog: "",
      flag: false,
      home: true,
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("username"));
    let pass = JSON.parse(localStorage.getItem("password"));
    if (!this.state.usernamelog || !this.state.passwordlog) {
      this.setState({ flag: !this.state.flag });
      console.log("empty");
    } else if (
      this.state.usernamelog != user ||
      this.state.passwordlog != pass
    ) {
      this.setState({ flag: !this.state.flag });
    } else {
      this.setState({ home: !this.state.home, flag: !this.state.flag });
    }
  }
  render() {
    return (
      <div
        className="container"
        style={{ maxWidth: "500px", marginTop: "150px" }}
      >
        {this.state.home ? (
          <form onSubmit={this.submitHandler}>
            <h3>LogIn</h3>
            <div className="form-group mt-3">
              <label>username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                onChange={(e) => this.setState({ usernamelog: e.target.value })}
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({ passwordlog: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block mt-3"
            >
              Login
            </button>

            {this.state.flag && (
              <p className="mt-3">Fill correct Info else keep trying.</p>
            )}
          </form>
        ) : (
          <Logout />
        )}
      </div>
    );
  }
}

export default Login;
