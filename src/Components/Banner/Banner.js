import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchRestra } from "../../Redux/Action";

class Banner extends Component {
  state = {
    value: "",
  };
  render() {
    const { searchRestra } = this.props;
    console.log(searchRestra);
    return (
      <div className="row m-0">
        <div
          className="col-12 p-0 d-flex flex-column justify-content-center align-items-center"
          style={{
            backgroundImage: "url(/Images/hotel_banner.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
          }}
        >
          <div className="Heading text-light d-flex flex-column align-items-center">
            <h1
              className="p-2"
              style={{ letterSpacing: "1px", fontSize: "3.2rem" }}
            >
              ROMATO
            </h1>
            <p className="p-4 fs-4 text-light">
              Discover the best food & drinks in Kolkata
            </p>
          </div>
          <div
            className="input-group mb-3 d-flex justify-content-center"
            style={{ width: "50%" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="search for restra"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
            <Link
              to="/neilskitchen"
              className="input-group-text m-0 p-0 border-0 text-decoration-none"
              onClick={() => searchRestra(this.state.value)}
            >
              <button className="btn btn-light" type="submit">
                Meals for you
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchRestra: (payload) => dispatch(searchRestra(payload)),
});
export default connect(null, mapDispatchToProps)(Banner);
