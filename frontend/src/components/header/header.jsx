import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

//Redux
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Header = ({ isAuthenticated, logout }) => (
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
    </div>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Header);
