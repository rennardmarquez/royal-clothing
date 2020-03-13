import React, { useState, useEffect } from "react";

import "./register.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import Alert from "../alert/alert";

//Redux
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alert";

const Register = ({ register, setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className="register">
      <h1>I don't have an account</h1>
      <span>Register here.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          label="Name"
          handleChange={e => handleChange(e)}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={e => handleChange(e)}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={e => handleChange(e)}
        />
        <FormInput
          type="password"
          name="password2"
          value={password2}
          label="Confirm Password"
          handleChange={e => handleChange(e)}
        />
        <Alert />

        <CustomButton className="standard" children="Register" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  alert: state.alert
});

export default connect(mapStateToProps, { register, setAlert })(Register);
