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
      <div className="form-group row">
        <label className="col-2 col-form-label">{this.props.title}</label>
        <div className="col-4">
          <DropDownList
            className="form-control"
            data={this.props.data}
            textField={this.props.textField}
            dataItemKey={this.props.dataItemKey}
            value={selectedItem}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

DropDownFilter.propTypes = {
  id: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  textField: PropTypes.string.isRequired,
  dataItemKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropDownFilter;
