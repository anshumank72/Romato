import React, { Component } from "react";
import { signUp } from "../../Redux/Action";
import Login from "./Login";
import { connect } from "react-redux";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let { isLogged, signUp } = this.props;
    let item = { ...this.state };
    //console.log(item);

    localStorage.setItem("signup-info", JSON.stringify(item));
    //console.log("saved");
    signUp(!isLogged);
  }

  render() {
    return (
      <div>
        {this.props.isLogged ? (
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
          </form>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  signUp: (payload) => dispatch(signUp(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
