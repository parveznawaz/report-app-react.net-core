import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import _ from "lodash";
import { getCurrentWeeks, getDefaultWeek } from "../../actions/FilterActions";

class WeeksDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }

  componentDidMount() {
    this.props.getCurrentWeeks();
    this.props.getDefaultWeek();
  }

  onChange = event => {
    this.setState({ id: event.target.value.schedid });
    this.props.onChange(event.target.value.schedid);
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.id === 0 && nextProps.defaultWeek > 0) {
      this.setState({ id: nextProps.defaultWeek });
    }
  }

  render() {
    return (
      <div>
        <label className="k-form-field">
          <span>{this.props.title}</span>
          <DropDownList
            data={this.props.weeks}
            textField="label"
            dataItemKey="schedid"
            value={_.find(this.props.weeks, {
              schedid: this.state.id
            })}
            onChange={this.onChange}
            style={{ width: "250px" }}
          />
        </label>
      </div>
    );
  }
}

WeeksDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  weeks: PropTypes.array.isRequired,
  defaultWeek: PropTypes.number.isRequired,
  getCurrentWeeks: PropTypes.func.isRequired,
  getDefaultWeek: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  weeks: state.weeks,
  defaultWeek: state.defaultWeek
});

export default connect(
  mapStateToProps,
  {
    getCurrentWeeks,
    getDefaultWeek
  }
)(WeeksDropDown);
