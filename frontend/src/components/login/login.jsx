import React, { useState, Fragment } from "react";
import CustomButton from "../custom-button/custom-button";

import FormInput from "../form-input/form-input";

import "./login.styles.scss";

//Redux
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = event => {
    let { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    login(email, password);

    console.log("submitted");
  };

  return (
    <Fragment>
      <div className="login">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
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
          <CustomButton className="standard" children="Login" />
        </form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
