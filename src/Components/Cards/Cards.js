import React from "react";
import Card from "./Card/Card";

//photo = [online.webp, nightlife.webp, meal.webp, Gold.wep];

const cards = (props) => {
  return (
    <div className="py-5 d-flex justify-content-around">
      <Card
        text={"Order Food Online"}
        source="https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png"
      />
      <Card
        text={"NightLife's and club"}
        source="https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png"
      />
      <Card
        text={"Go out for meal"}
        source={
          "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png"
        }
      />
      <Card
        text={"Romato Gold"}
        source="https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png"
      />
    </div>
  );
};
export default cards;
