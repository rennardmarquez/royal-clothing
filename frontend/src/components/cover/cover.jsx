import React from "react";

import "./cover.styles.scss";

class Cover extends React.Component {
  render() {
    return (
      <div class="cover">
        <div class="background-image"></div>
        <div class="content">
          <h1 class="title">THE COMFORT OF ATHLEISURE</h1>
          <div class="shop-button">
            <span class="button-text">SHOP NOW</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
