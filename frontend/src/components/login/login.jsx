import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";

import FormInput from "../form-input/form-input";

import "./login.styles.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = event => {
    let { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div className="login">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form
      // onSubmit={this.handleSubmit}
      >
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          handleChange={handleChange}
        />
      </form>
      <CustomButton className="standard" children="Login" />
    </div>
  );
};

export default Login;
