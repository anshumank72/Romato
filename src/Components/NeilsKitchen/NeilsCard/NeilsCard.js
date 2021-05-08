import React from "react";

const neilsCard = (props) => {
  return (
    <div class="card m-5" style={{ width: "18rem" }}>
      <img src={props.source} class="card-img-top" alt="chicken lollipop" />
      <div class="card-body text-dark text-center">
        <h3 class="card-title">{props.text}</h3>
        <h5 class="card-text">{props.price}</h5>
        <button
          className="btn m-0"
          style={{ width: "100%", backgroundColor: "#17a2b8" }}
        >
          Meals Detail
        </button>
      </div>
    </div>
  );
};
export default neilsCard;
