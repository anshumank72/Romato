import React from "react";

const card = (props) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.source} class="card-img-top" alt={props.text} />
      <div class="card-body text-center fs-4">
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  );
};
export default card;
