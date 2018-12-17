import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReportTitle from "../common/ReportTitle";
import ReportFilters from "../common/ReportFilters";
import * as filterTypes from "../common/filterTypes";

class ScheduleServiceRequestsStatusReport extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <ReportTitle title="Scheduled Service Requests Status" />
        <ReportFilters
          filterType={filterTypes.ScheduleServiceRequestsStatusReportFilter}
        />
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
