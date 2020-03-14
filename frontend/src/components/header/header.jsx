import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";

//Redux
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Header = ({ isAuthenticated, isHidden, logout }) => (
  <div className="header">
    <Link to="/">
      <Logo src="../../assets/crown.svg" alt="Logo" className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {isAuthenticated ? (
        <div className="option" onClick={logout}>
          LOG OUT
        </div>
      ) : (
        <Link className="option" to="/login">
          LOG IN
        </Link>
      )}
      <CartIcon />
    </div>
    {isHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isHidden: state.cart.isHidden
});

export default connect(mapStateToProps, { logout })(Header);
