import React, { Component } from "react";
import NeilsCard from "./NeilsCard/NeilsCard";
import { connect } from "react-redux";
import { cartItem } from "../../Redux/Action";
class NeilsKitchen extends Component {
  render() {
    const { searchData, cartItem } = this.props;
    //console.log(searchData);
    const card = searchData.map((item) => {
      return (
        <NeilsCard
          key={item.id}
          source={item.img}
          text={item.name}
          price={item.price}
          cartItemHandler={() => cartItem(item)}
        />
      );
    });
    return (
      <div className="container d-flex justify-content-around align-items-center flex-wrap">
        {card}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  searchData: state.searchData,
});
const mapDispatchToProps = (dispatch) => ({
  cartItem: (payload) => dispatch(cartItem(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NeilsKitchen);
