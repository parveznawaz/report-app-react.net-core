import React, { Component } from "react";
import LoadingPanel from "../common/LoadingPanel";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReportGrid from "../common/ReportGrid";
import { IncidentsReportsForItemReceivedColumns } from "../../config/ReportColumns";
import { IncidentsReportsForItemReceivedFileName } from "../../config/Settings";
import ReportTitle from "../common/ReportTitle";
import ReportFilters from "../common/ReportFilters";
import * as filterTypes from "../common/filterTypes";
import { getIncidentsReportsForItemReceived } from "../../actions/ServiceRequestActions";

class IncidentsReportsForItemReceived extends Component {
  componentWillReceiveProps({ filters }) {
    if (
      this.props.filters.startWeek !== filters.startWeek ||
      this.props.filters.endWeek !== filters.endWeek ||
      this.props.filters.isExternal !== filters.isExternal ||
      this.props.filters.isShowAllIncident !== filters.isShowAllIncident
    ) {
      this.loadData(filters);
    }
  }

  loadData = filters => {
    this.props.getIncidentsReportsForItemReceived(
      filters.startWeek,
      filters.endWeek,
      filters.isExternal,
      filters.isShowAllIncident ? 1 : 0
    );
  };

  refreshData = () => this.loadData(this.props.filters);

  render() {
    return (
      <div>
        <ReportTitle title="Scheduled Service Requests Status" />
        <ReportFilters
          filterType={filterTypes.IncidentsReportsForItemReceivedFilter}
        />
        <ReportGrid
          data={this.props.data.incidentsReportsForItemReceived}
          columns={IncidentsReportsForItemReceivedColumns}
          fileName={IncidentsReportsForItemReceivedFileName}
          loadData={this.refreshData}
        />
        <LoadingPanel />
      </div>
    );
  }
}

IncidentsReportsForItemReceived.propTypes = {
  filters: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  getIncidentsReportsForItemReceived: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  filters: state.filters,
  data: state.data
});

export default connect(
  mapStateToProps,
  { getIncidentsReportsForItemReceived }
)(IncidentsReportsForItemReceived);
