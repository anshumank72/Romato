import React from "react";
import data from "../../../data.json";
import "./NeilsProductDetail.css";

const neilsProductDetail = (props) => {
  return data.NeilsKitchen.map((item, key) => {
    if (item.id == props.match.params.id) {
      return (
        <div className="ProductCard">
          <div className="cont">
            <img
              src={data.NeilsKitchen[key].srcimg}
              alt={data.NeilsKitchen[key].name}
            />
            <div className="des_cont">
              <div className="Description">
                <h2>{data.NeilsKitchen[key].name}</h2>
                <h3>ingredients: {data.NeilsKitchen[key].ingredients}</h3>
                <h3>price: {data.NeilsKitchen[key].price}</h3>
              </div>
              <div className="btn">
                <button>Cancel</button>
                <button>Order</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
};
export default neilsProductDetail;
