import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ExcelExport,
  ExcelExportColumn
} from "@progress/kendo-react-excel-export";

class ExportExcel extends Component {
  _exporter;
  export = () => {
    this._exporter.save();
  };

  render() {
    let columns = this.props.columns.map((column, index) => (
      <ExcelExportColumn
        key={index}
        field={column.field}
        title={column.title}
        filter={column.filter}
      />
    ));

    return (
      <div>
        <button className="k-button k-primary" onClick={this.export}>
          Export to Excel
        </button>

        <ExcelExport
          data={this.props.data}
          fileName={this.props.fileName}
          ref={exporter => {
            this._exporter = exporter;
          }}
        >
          {columns}
        </ExcelExport>
      </div>
    );
  }
}

ExportExcel.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  fileName: PropTypes.string.isRequired
};

export default ExportExcel;
