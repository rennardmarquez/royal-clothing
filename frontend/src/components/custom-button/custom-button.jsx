import React from "react";

const CustomButton = ({ children, item, onClick }) => (
  <button className="custom-button" type="submit" onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
