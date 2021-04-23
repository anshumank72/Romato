import React from "react";
import NeilsCard from "./NeilsCard/NeilsCard";
import "./NeilsKitchen.css";
import Navbar from "../Navbar/Navbar";

const neilsKitchen = () => {
  return (
    <div className="NeilsKitchen">
      <Navbar />
      <div className="cont">
        <NeilsCard
          source={"https://eloquent-murdock-ac6e11.netlify.app/Image/dal1.png"}
          text={"Chicken Lollipop"}
          price={"Rs 145"}
        />
        <NeilsCard
          source={"https://eloquent-murdock-ac6e11.netlify.app/Image/dal2.png"}
          text={"Kadhai Panner"}
          price={"Rs 145"}
        />
        <NeilsCard
          source={"https://eloquent-murdock-ac6e11.netlify.app/Image/dal3.png"}
          text={"Mixed Hakka Noddles"}
          price={"Rs 145"}
        />
        <NeilsCard
          source={"https://eloquent-murdock-ac6e11.netlify.app/Image/dal2.png"}
          text={"Chicken Roll"}
          price={"Rs 145"}
        />
        <NeilsCard
          source={"https://eloquent-murdock-ac6e11.netlify.app/Image/dal3.png"}
          text={"Chicken Kadhai"}
          price={"Rs 145"}
        />
      </div>
    </div>
  );
};
export default neilsKitchen;
