import React, { Component } from "react";
import LoadingPanel from "../common/LoadingPanel";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReportGrid from "../common/ReportGrid";
import { ListOfGtinNotReceivedColumns } from "../../config/ReportColumns";
import { ListOfGtinNotReceivedExcelFileName } from "../../config/Settings";
import ReportTitle from "../common/ReportTitle";
import WeeksDropDown from "../common/WeeksDropDown";
import ReportFilters from "../common/ReportFilters";

class ScheduleServiceRequestsStatusReport extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <ReportTitle title="Scheduled Service Requests Status" />
        <ReportFilters />
      </div>
    );
  }
}

ScheduleServiceRequestsStatusReport.propTypes = {
  weeks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  weeks: state.weeks
});

export default connect(
  mapStateToProps,
  {}
)(ScheduleServiceRequestsStatusReport);
