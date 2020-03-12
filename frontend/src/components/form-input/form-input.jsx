import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <label htmlFor={label}>
      {label}
      {<input onChange={handleChange} {...otherProps} />}
    </label>
  </div>
);

export default FormInput;
