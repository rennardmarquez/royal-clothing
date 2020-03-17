import React from "react";
import { withRouter } from "react-router";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button";

//Redux
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../selectors/cart";

const CartDropdown = ({ cartItems, history }) => {
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

      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
