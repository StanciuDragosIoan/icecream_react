import React from "react";
import PropTypes from "prop-types";
// connect is always used to interact a component with redux (call an action/get state)
import { connect } from "react-redux";

//destructure props.alerts
const Alert = ({ alerts }) =>
  // map through alerts and display the right one with the message and class for style
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div
      key={alert.id}
      className={`col-sm-8 mx-auto alert alert-${alert.alertType}`}
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

//get the alert state (map the redux state to a prop in this component so we can access it and display the alerts)
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
