import React from "react";
import "./NeilsCard.css";

const neilsCard = (props) => {
  return (
    <div className="NeilsCard">
      <img src={props.source} alt="chicken lollipop" />
      <div className="text">
        <h3>{props.text}</h3>
        <p>{props.price}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};
export default neilsCard;
