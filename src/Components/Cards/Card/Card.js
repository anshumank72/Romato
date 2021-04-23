import React from "react";
import "./Card.css";

const card = (props) => {
  return (
    <div className="Card">
      <img src={props.source} />
      <h2>{props.text}</h2>
    </div>
  );
};
export default card;
