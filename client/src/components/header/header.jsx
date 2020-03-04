import React from "react";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div class="header">
    <Logo src="../../assets/crown.svg" alt="Logo" class="logo" />
  </div>
);

export default Header;
