import React, { Component } from "react";
import * as filterTypes from "./filterTypes";
import DropDownFilter from "./DropDownFilter";
import { ResultsOptions, ReceivedOptions } from "../../config/Settings";
import { getCurrentWeeks, getDefaultWeek } from "../../actions/FilterActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ReportFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startWeek: 0,
      endWeek: 0,
      received: 0,
      result: 0
    };
  }
  componentDidMount() {
    this.props.getCurrentWeeks();
    this.props.getDefaultWeek();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.startWeek === 0 && nextProps.defaultWeek > 0) {
      this.setState({ startWeek: nextProps.defaultWeek });
    }
    if (this.state.endWeek === 0 && nextProps.defaultWeek > 0) {
      this.setState({ endWeek: nextProps.defaultWeek });
    }
  }

  onStartWeekChange = value => {
    this.setState({ startWeek: value });
  };

  onEndWeekChange = value => {
    this.setState({ endWeek: value });
  };

  onResultChange = value => {
    this.setState({ result: value });
  };

  onReceivedChange = value => {
    this.setState({ received: value });
  };

  render() {
    let filters = <div />;
    console.log(this.state.startWeek);
    switch (this.props.filterType) {
      case filterTypes.ScheduleServiceRequestsStatusReportFilter:
        filters = (
          <form className="k-form" onSubmit={this.handleSubmit}>
            <DropDownFilter
              data={this.props.weeks}
              title={"Start Week"}
              id={this.state.startWeek}
              textField="label"
              dataItemKey="schedid"
              onChange={this.onStartWeekChange}
            />
            <DropDownFilter
              data={this.props.weeks}
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
  weeks: PropTypes.array.isRequired,
  defaultWeek: PropTypes.number.isRequired,
  getCurrentWeeks: PropTypes.func.isRequired,
  getDefaultWeek: PropTypes.func.isRequired
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
)(ReportFilters);
