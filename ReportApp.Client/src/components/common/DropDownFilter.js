import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { DropDownList } from "@progress/kendo-react-dropdowns";

class DropDownFilter extends Component {
  onChange = event => {
    this.props.onChange(event.target.value[this.props.dataItemKey]);
  };

  render() {
    let selectedItem = _.find(
      this.props.data,
      x => x[this.props.dataItemKey] === this.props.id
    );

    return (
      <div>
        <label className="k-form-field">
          <span>{this.props.title}</span>
          <DropDownList
            data={this.props.data}
            textField={this.props.textField}
            dataItemKey={this.props.dataItemKey}
            value={selectedItem}
            onChange={this.onChange}
            style={{ width: "250px" }}
          />
        </label>
      </div>
    );
  }
}

DropDownFilter.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropDownFilter;
