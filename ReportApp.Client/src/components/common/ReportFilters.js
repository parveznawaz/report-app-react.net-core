import React, { Component } from "react";
import * as filterTypes from "./filterTypes";
import DropDownFilter from "./DropDownFilter";
import ToggleFilter from "./ToggleFilter";
import {
  ResultsOptions,
  ReceivedOptions,
  IsExternalOptions
} from "../../config/Settings";
import {
  getCurrentWeeks,
  getDefaultWeek,
  setFilter
} from "../../actions/FilterActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ReportFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startWeek: 0,
      endWeek: 0,
      received: 0,
      result: 0,
      isExternal: 2,
      isShowAllIncident: true
    };
    this.props.setFilter({ ...this.state });
  }
  componentDidMount() {
    this.props.getCurrentWeeks();
    this.props.getDefaultWeek();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.startWeek === 0 && nextProps.weeks.defaultWeek > 0) {
      this.setState({ startWeek: nextProps.weeks.defaultWeek });
      this.props.setFilter({ startWeek: nextProps.weeks.defaultWeek });
    }
    if (this.state.endWeek === 0 && nextProps.weeks.defaultWeek > 0) {
      this.setState({ endWeek: nextProps.weeks.defaultWeek });
      this.props.setFilter({ endWeek: nextProps.weeks.defaultWeek });
    }
  }

  onStartWeekChange = startWeek => {
    this.setState({ startWeek });
    this.props.setFilter({ startWeek });
  };

  onEndWeekChange = endWeek => {
    this.setState({ endWeek });
    this.props.setFilter({ endWeek });
  };

  onResultChange = result => {
    this.setState({ result });
    this.props.setFilter({ result });
  };

  onReceivedChange = received => {
    this.setState({ received });
    this.props.setFilter({ received });
  };

  onIsExternalChange = isExternal => {
    this.setState({ isExternal });
    this.props.setFilter({ isExternal });
  };

  onShowAllIncident = isShowAllIncident => {
    this.setState({ isShowAllIncident });
    this.props.setFilter({ isShowAllIncident });
  };

  render() {
    let filters = <div />;
    switch (this.props.filterType) {
      case filterTypes.ScheduleServiceRequestsStatusReportFilter:
        filters = (
          <form className="k-form-inline">
            <DropDownFilter
              data={this.props.weeks.currentWeeks}
              title={"Start Week"}
              id={this.state.startWeek}
              textField="label"
              dataItemKey="schedid"
              onChange={this.onStartWeekChange}
            />
            <DropDownFilter
              data={this.props.weeks.currentWeeks}
              title={"End Week"}
              id={this.state.endWeek}
              textField="label"
              dataItemKey="schedid"
              onChange={this.onEndWeekChange}
            />
            <DropDownFilter
              data={ReceivedOptions}
              title={"Received"}
              id={this.state.received}
              textField="label"
              dataItemKey="id"
              onChange={this.onReceivedChange}
            />
            <DropDownFilter
              data={ResultsOptions}
              title={"Result"}
              id={this.state.result}
              textField="label"
              dataItemKey="id"
              onChange={this.onResultChange}
            />
          </form>
        );
        break;
      case filterTypes.IncidentsReportsForItemReceivedFilter:
        filters = (
          <form className="k-form-inline">
            <DropDownFilter
              data={this.props.weeks.currentWeeks}
              title={"Start Week"}
              id={this.state.startWeek}
              textField="label"
              dataItemKey="schedid"
              onChange={this.onStartWeekChange}
            />
            <DropDownFilter
              data={this.props.weeks.currentWeeks}
              title={"End Week"}
              id={this.state.endWeek}
              textField="label"
              dataItemKey="schedid"
              onChange={this.onEndWeekChange}
            />
            <DropDownFilter
              data={IsExternalOptions}
              title={"Internal/External"}
              id={this.state.isExternal}
              textField="label"
              dataItemKey="id"
              onChange={this.onIsExternalChange}
            />
            <ToggleFilter
              title="Show all GTINS"
              checked={this.state.isShowAllIncident}
              onChange={this.onShowAllIncident}
            />
          </form>
        );
        break;
      default:
        filters = <div />;
    }

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 offset-sm-3">
          <div className="">
            <div className="card-block">{filters}</div>
          </div>
        </div>
      </div>
    );
  }
}

ReportFilters.propTypes = {
  weeks: PropTypes.object.isRequired,
  getCurrentWeeks: PropTypes.func.isRequired,
  getDefaultWeek: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  weeks: state.weeks
});

export default connect(
  mapStateToProps,
  {
    getCurrentWeeks,
    getDefaultWeek,
    setFilter
  }
)(ReportFilters);
