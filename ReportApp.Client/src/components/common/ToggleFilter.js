import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch } from "@progress/kendo-react-inputs";

class ToggleFilter extends Component {
  onChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="form-group row">
        <label className="col-2 col-form-label">{this.props.title}</label>
        <div className="col-4">
          <Switch onChange={this.onChange} checked={this.props.checked} />
        </div>
      </div>
    );
  }
}

ToggleFilter.propTypes = {
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ToggleFilter;
