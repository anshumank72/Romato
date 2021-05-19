import React from "react";
import data from "../../../data.json";
import "./NeilsProductDetail.css";
import { connect } from "react-redux";
import { removeCartItem } from "../../../../Redux/Action";

const neilsProductDetail = (props) => {
  //console.log(props.cartData);
  return props.cartData.map((item, key) => {
    return (
      <div className="ProductCard">
        <div className="cont">
          <img src={item.srcimg} alt={item.name} />
          <div className="des_cont">
            <div className="Description">
              <h2>{item.name}</h2>
              <h3>ingredients: {item.ingredients}</h3>
              <h3>price: {item.price}</h3>
            </div>
            <button onClick={() => props.removeCartItem(item.id)}>
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    );
  });
};

const mapStateToProps = (state) => ({
  cartData: state.cartData,
});
const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (Payload) => dispatch(removeCartItem(Payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(neilsProductDetail);
