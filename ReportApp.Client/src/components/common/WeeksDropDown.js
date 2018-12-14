import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentWeeks } from "../../actions/weeksActions";
import { DropDownList } from "@progress/kendo-react-dropdowns";

function WeeksDropDown({ weeks }) {
  return (
    <div>
      <label className="k-form-field">
        <span>Last Name</span>
        <DropDownList
          data={weeks}
          textField="label"
          dataItemKey="schedid"
          // value={_.find(this.props.weeks.data, {Schedid: this.props.selectedWeek.data})}
          //onChange={this.onChange}
          // style={{ width: "250px" }}
        />
      </label>
    </div>
  );
}

WeeksDropDown.propTypes = {
  weeks: PropTypes.array.isRequired,
  getCurrentWeeks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  weeks: state.weeks
});

export default connect(
  mapStateToProps,
  {
    getCurrentWeeks
  }
)(WeeksDropDown);
