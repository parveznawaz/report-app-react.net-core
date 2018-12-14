import "babel-polyfill";
import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reports from "./components/reports/Reports";
import Header from "./components/layout/Header";
import SideNav from "./components/layout/SideNav";
import ListOfGtinNotReceived from "./components/reports/ListOfGtinNotReceived";
import configureStore from "./store/configureStore";
import ScheduleServiceRequestsStatusReport from "./components/reports/ScheduleServiceRequestsStatusReport";
import IncidentsReportsForItemReceived from "./components/reports/IncidentsReportsForItemReceived";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            {/* <Route exact path="/" component={Landing} /> */}
            <div className="row">
              <SideNav />
              <div className="report-area">
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/" component={Reports} />
                <Route exact path="/reports" component={Reports} />
                <Route
                  exact
                  path="/reports/listOfGtinNotReceived"
                  component={ListOfGtinNotReceived}
                />
                <Route
                  exact
                  path="/reports/incidentsReportsForItemReceived"
                  component={IncidentsReportsForItemReceived}
                />
                <Route
                  exact
                  path="/reports/scheduleServiceRequestsStatusReport"
                  component={ScheduleServiceRequestsStatusReport}
                />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
