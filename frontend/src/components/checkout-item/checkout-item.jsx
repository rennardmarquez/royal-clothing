import React from "react";
import { connect } from "react-redux";
import { removeToCart } from "../../actions/cart";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeToCart }) => {
  const removeToCartHandler = () => {
    removeToCart(cartItem);
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.qty}</span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={removeToCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { removeToCart })(CheckoutItem);
