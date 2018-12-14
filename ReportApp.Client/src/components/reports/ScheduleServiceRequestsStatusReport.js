import React, { Component } from "react";
import LoadingPanel from "../common/LoadingPanel";
import { getCurrentWeeks } from "../../actions/weeksActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReportGrid from "../common/ReportGrid";
import { ListOfGtinNotReceivedColumns } from "../../config/ReportColumns";
import { ListOfGtinNotReceivedExcelFileName } from "../../config/Settings";
import ReportTitle from "../common/ReportTitle";
import WeeksDropDown from "../common/WeeksDropDown";

class ScheduleServiceRequestsStatusReport extends Component {
  componentDidMount() {
    if (this.props.weeks.length === 0) {
      this.props.getCurrentWeeks();
    }
  }

  render() {
    return (
      <div>
        <ReportTitle title="Scheduled Service Requests Status" />
        <WeeksDropDown />
      </div>
    );
  }
}

ScheduleServiceRequestsStatusReport.propTypes = {
  serviceRequestCurrentWeeks: PropTypes.array.isRequired,
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
)(ScheduleServiceRequestsStatusReport);
