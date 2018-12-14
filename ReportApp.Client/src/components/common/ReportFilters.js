import React, { Component } from "react";
import { NumericTextBox } from "@progress/kendo-react-inputs";
import WeeksDropDown from "./WeeksDropDown";

export default class ReportFilters extends Component {
  onStartWeekChange = value => {};

  onEndWeekChange = value => {};

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 offset-sm-3">
          <div className="">
            <div className="card-block">
              <form className="k-form" onSubmit={this.handleSubmit}>
                <WeeksDropDown
                  title={"Start Week "}
                  onWeekChange={this.onStartWeekChange}
                />
                <WeeksDropDown
                  title={"End Week "}
                  onWeekChange={this.onEndWeekChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
