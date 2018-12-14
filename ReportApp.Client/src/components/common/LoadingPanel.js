import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const LoadingPanel = ({ isloading }) => {
  const loadingPanel = (
    <div className="k-loading-mask">
      <span className="k-loading-text">Loading</span>
      <div className="k-loading-image" />
      <div className="k-loading-color" />
    </div>
  );

  const content = document && document.querySelector("App");
  const empty = <div />;

  return isloading
    ? content
      ? ReactDOM.createPortal(loadingPanel, content)
      : loadingPanel
    : empty;
};

LoadingPanel.propTypes = {
  isloading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    isloading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(LoadingPanel);
