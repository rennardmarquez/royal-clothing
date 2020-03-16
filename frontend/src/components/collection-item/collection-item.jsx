import React from "react";

import CustomButton from "../custom-button/custom-button";

import "./collection-item.styles.scss";

//Redux
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart";

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;

  const clickAddToCart = () => {
    addToCart(item);
    console.log(item);
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={clickAddToCart}>Add to cart</CustomButton>
    </div>
  );
};

export default connect(null, { addToCart })(CollectionItem);
