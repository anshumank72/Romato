import React, { Component } from "react";
import NeilsCard from "./NeilsCard/NeilsCard";
import { connect } from "react-redux";

class NeilsKitchen extends Component {
  render() {
    const { searchData } = this.props;
    console.log(searchData);
    const card = searchData.map((item) => {
      return (
        <NeilsCard
          key={item.id}
          source={item.img}
          text={item.name}
          price={item.price}
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
export default connect(mapStateToProps)(NeilsKitchen);
