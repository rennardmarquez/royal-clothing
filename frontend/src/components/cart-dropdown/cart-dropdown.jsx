import React from "react";
import { withRouter } from "react-router";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button";

//Redux
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../selectors/cart";
import { viewCart } from "../../actions/cart";

const CartDropdown = ({ cartItems, history, viewCart }) => {
  const clickCheckout = () => {
    history.push("/checkout");

    viewCart();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton onClick={clickCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, { viewCart })(CartDropdown));
