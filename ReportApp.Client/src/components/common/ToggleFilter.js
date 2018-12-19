import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch } from "@progress/kendo-react-inputs";

class ToggleFilter extends Component {
  onChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div>
        <label className="k-form-field">
          <span>{this.props.title}</span>
          <Switch onChange={this.onChange} checked={this.props.checked} />
        </label>
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
