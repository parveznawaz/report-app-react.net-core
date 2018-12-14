import React, { Component } from "react";
import LoadingPanel from "../common/LoadingPanel";
import { getListOfGtinNotReceived } from "../../actions/listOfGtinNotReceivedActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReportGrid from "../common/ReportGrid";
import { ListOfGtinNotReceivedColumns } from "../../config/ReportColumns";
import { ListOfGtinNotReceivedExcelFileName } from "../../config/Settings";
import ReportTitle from "../common/ReportTitle";
class ListOfGtinNotReceived extends Component {
  componentDidMount() {
    if (this.props.listOfGtinNotReceived.length === 0) {
      this.props.getListOfGtinNotReceived();
    }
  }

  render() {
    return (
      <div>
        <ReportTitle title="List of GTIN Not Received" />
        <ReportGrid
          data={this.props.listOfGtinNotReceived}
          columns={ListOfGtinNotReceivedColumns}
          fileName={ListOfGtinNotReceivedExcelFileName}
          loadData={this.props.getListOfGtinNotReceived}
        />
        <LoadingPanel />
      </div>
    );
  }
}

ListOfGtinNotReceived.propTypes = {
  listOfGtinNotReceived: PropTypes.array.isRequired,
  getListOfGtinNotReceived: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  listOfGtinNotReceived: state.listOfGtinNotReceived
});

export default connect(
  mapStateToProps,
  {
    getListOfGtinNotReceived
  }
)(ListOfGtinNotReceived);
