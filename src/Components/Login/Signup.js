import React, { Component } from "react";
import Login from "./Login";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      loggedin: true,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem("username", JSON.stringify(this.state.username));
    localStorage.setItem("password", JSON.stringify(this.state.password));
    console.log("saved");
    this.setState({ loggedin: !this.state.loggedin });
  }
  handleClick() {
    this.setState({ loggedin: !this.state.loggedin });
  }

  render() {
    return (
      <div>
        {this.state.loggedin ? (
          <form
            onSubmit={this.handleFormSubmit}
            style={{ maxWidth: "500px", margin: "30px auto" }}
          >
            <h3>Register</h3>

            <div className="form-group mb-3">
              <label>username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                name="name"
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>

            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block mt-4"
            >
              Register
            </button>
            <p className="forgot-password text-right mt-3">
              Already registered{" "}
              <a href="#" onClick={this.handleClick}>
                log in?
              </a>
            </p>
          </form>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}
export default Signup;
