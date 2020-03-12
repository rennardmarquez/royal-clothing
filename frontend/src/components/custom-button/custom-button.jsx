import React from "react";

const CustomButton = ({ className, children }) => (
  <button className type="submit">
    {children}
  </button>
);

export default CustomButton;
