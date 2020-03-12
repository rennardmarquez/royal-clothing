import React from "react";

import "./cover.styles.scss";

class Cover extends React.Component {
  render() {
    return (
      <div className="cover">
        <div className="background-image"></div>
        <div className="content">
          <h1 className="title">THE COMFORT OF ATHLEISURE</h1>
          <div className="shop-button">
            <span className="button-text">SHOP NOW</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
