import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let islogged = true;
    if (token === null) {
      islogged: false;
    }
    this.state = {
      username: "",
      password: "",
      islogged,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "admin" && password === "password") {
      localStorage.setItem("token", "dsvdfjvbdkfjdl");
      this.setState({ islogged: true });
    }
  }
  render() {
    if (this.state.islogged) {
      return <Redirect to="/Admin" />;
    }
    return (
      <div
        className="container"
        style={{ maxWidth: "500px", marginTop: "150px" }}
      >
        <form className="position-relative" onSubmit={this.submitHandler}>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              username
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                name="username"
                value={this.state.username}
                placeholder="username"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary text-center position-absolute start-50 translate-middle mt-5"
          >
            LogIn
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
