import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ id, title, imageUrl, linkUrl, size }) => (
  <div className={`menu-item ${size}`} key={id}>
    <div
      className="menu-background"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>

    <div className="menu-content">
      <h1 className="menu-title">{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default MenuItem;
