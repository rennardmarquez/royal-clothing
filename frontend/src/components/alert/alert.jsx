import React from "react";
import { connect } from "react-redux";

import "./alert.styles.scss";

const Alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
    return <div>{alerts[0]}</div>;
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
