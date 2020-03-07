import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div class="header">
    <Link to="/">
      <Logo src="../../assets/crown.svg" alt="Logo" class="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/login">
        LOG IN
      </Link>
    </div>
  </div>
);

export default Header;
