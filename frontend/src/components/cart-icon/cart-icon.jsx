import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { viewCart } from "../../actions/cart";

const CartIcon = ({ viewCart }) => (
  <div className="cart-icon" onClick={viewCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default connect(null, { viewCart })(CartIcon);
