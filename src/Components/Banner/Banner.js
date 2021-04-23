import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const banner = (props) => {
  return (
    <div className="Banner">
      <div className="Heading">
        <h1>ROMATO</h1>
        <p>Discover the best food & drinks in Kolkata</p>
      </div>
      <div className="Input">
        <Link to="/neilskitchen">
          <button>Meals for you</button>
        </Link>
      </div>
    </div>
  );
};
export default banner;
