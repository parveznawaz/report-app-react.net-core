import React, { Component } from "react";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { orderBy } from "@progress/kendo-data-query";
import PropTypes from "prop-types";
import "./ReportGrid.css";
import ExportExcel from "./ExportExcel";

class ReportGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: [{ field: "", dir: "asc" }],
      skip: 0,
      take: 10
    };
  }

  render() {
    let columns = this.props.columns.map((column, index) => (
      <GridColumn
        key={index}
        field={column.field}
        title={column.title}
        filter={column.filter}
        width={column.width}
        minResizableWidth={column.minWidth}
      />
    ));

    let gridContent = (
      <div>
        <Grid
          style={{
            width: window.innerWidth - 180,
            height: window.innerHeight - 250
          }}
          data={orderBy(
            this.props.data.slice(
              this.state.skip,
              this.state.take + this.state.skip
            ),
            this.state.sort
          )}
          resizable
          skip={this.state.skip}
          take={this.state.take}
          total={this.props.data.length}
          pageable={{
            type: "input",
            pageSizes: [10, 20, 30],
            previousNext: true
          }}
          onPageChange={event => {
            this.setState({
              skip: event.page.skip,
              take: event.page.take,
              pageSize: event.page.take
            });
          }}
          sortable
          sort={this.state.sort}
          onSortChange={event => {
            this.setState({
              sort: event.sort
            });
          }}
        >
          <GridToolbar>
            <div className="row toolbar">
              <ExportExcel
                className="col-xs-12 col-sm-6"
                data={this.props.data}
                columns={this.props.columns}
                fileName={this.props.fileName}
              />
              <div className="col-xs-12 col-sm-6">
                <button
                  className="k-button k-primary"
                  onClick={this.props.loadData}
                >
                  Refresh
                </button>
              </div>
            </div>
          </GridToolbar>
          {columns}
        </Grid>
      </div>
    );

    return <div className="">{gridContent}</div>;
  }
}

ReportGrid.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  fileName: PropTypes.string.isRequired,
  loadData: PropTypes.func.isRequired
};

export default ReportGrid;
