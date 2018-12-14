import React, { Component } from "react";
import LoadingPanel from "../common/LoadingPanel";
import { getServiceRequestCurrentWeeks } from "../../actions/serviceRequestCurrentWeeksActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReportGrid from "../common/ReportGrid";
import { ListOfGtinNotReceivedColumns } from "../../config/ReportColumns";
import { ListOfGtinNotReceivedExcelFileName } from "../../config/Settings";
import ReportTitle from "../common/ReportTitle";

class ScheduleServiceRequestsStatusReport extends Component {
  componentDidMount() {
    if (this.props.serviceRequestCurrentWeeks.length === 0) {
      this.props.getServiceRequestCurrentWeeks();
    }
  }

  render() {
    return (
      <div>
        <ReportTitle title="Scheduled Service Requests Status" />
      </div>
    );
  }
}

ScheduleServiceRequestsStatusReport.propTypes = {
  serviceRequestCurrentWeeks: PropTypes.array.isRequired,
  getServiceRequestCurrentWeeks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  serviceRequestCurrentWeeks: state.serviceRequestCurrentWeeks
});

export default connect(
  mapStateToProps,
  {
    getServiceRequestCurrentWeeks
  }
)(ScheduleServiceRequestsStatusReport);
