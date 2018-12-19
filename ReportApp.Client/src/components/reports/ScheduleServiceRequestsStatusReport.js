import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReportTitle from "../common/ReportTitle";
import ReportFilters from "../common/ReportFilters";
import LoadingPanel from "../common/LoadingPanel";
import * as filterTypes from "../common/filterTypes";
import { getScheduleServiceRequests } from "../../actions/ServiceRequestActions";
import ReportGrid from "../common/ReportGrid";
import { ScheduledServiceRequestsExcelFileName } from "../../config/Settings";
import { ScheduledServiceRequestsColumns } from "../../config/ReportColumns";

class ScheduleServiceRequestsStatusReport extends Component {
  componentDidMount() {}

  componentWillReceiveProps({ filters }) {
    if (
      this.props.filters.startWeek !== filters.startWeek ||
      this.props.filters.endWeek !== filters.endWeek ||
      this.props.filters.received != filters.received ||
      this.props.filters.result != filters.result
    ) {
      this.loadData(filters);
    }
  }

  loadData = filters => {
    this.props.getScheduleServiceRequests(
      filters.startWeek,
      filters.endWeek,
      filters.received,
      filters.result
    );
  };

  render() {
    return (
      <div>
        <ReportTitle title="Scheduled Service Requests Status" />
        <ReportFilters
          filterType={filterTypes.ScheduleServiceRequestsStatusReportFilter}
        />
        <ReportGrid
          data={this.props.data.scheduledServiceRequests}
          columns={ScheduledServiceRequestsColumns}
          fileName={ScheduledServiceRequestsExcelFileName}
          loadData={this.loadData}
        />
        <LoadingPanel />
      </div>
    );
  }
}

ScheduleServiceRequestsStatusReport.propTypes = {
  filters: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  getScheduleServiceRequests: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  filters: state.filters,
  data: state.data
});

export default connect(
  mapStateToProps,
  { getScheduleServiceRequests }
)(ScheduleServiceRequestsStatusReport);
