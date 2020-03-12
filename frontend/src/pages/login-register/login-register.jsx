import React from "react";

import Login from "../../components/login/login";

import "./login-register.styles.scss";
import Register from "../../components/register/register";

const LoginRegister = () => {
  return (
    <div className="login-register">
      <Login />
      <Register />
    </div>
  );
};

export default LoginRegister;
