import React, { Component } from "react";
import LoadingPanel from "../common/LoadingPanel";
import { getListOfGtinNotReceived } from "../../actions/listOfGtinNotReceivedActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReportGrid from "../common/ReportGrid";
import { ListOfGtinNotReceivedColumns } from "../../config/ReportColumns";
import { ListOfGtinNotReceivedExcelFileName } from "../../config/Settings";
import ReportTitle from "../common/ReportTitle";

export default class IncidentsReportsForItemReceived extends Component {
  render() {
    return (
      <div>
        <ReportTitle title="Incidents report for item received" />
      </div>
    );
  }
}
