import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Reports.css';

export default class Reports extends Component {
  render() {
    return (
      <div className="container reports">
        <ul className="list-group list-group-flush col-8">
          <li className="list-group-item list-group-item-action">
            <Link to="/reports/listOfGtinNotReceived" className="btn btn-md btn-link">
              List of GTIN Not Received
            </Link>
          </li>
          <li className="list-group-item list-group-item-action">
            <Link to="/reports/incidentsReportsForItemReceived" className="btn btn-md btn-link">
              Incidents reports for item received
            </Link>
          </li>
          <li className="list-group-item list-group-item-action">
            <Link to="/reports/scheduleServiceRequestsStatusReport" className="btn btn-md btn-link">
              Schedule Service requests status report
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
