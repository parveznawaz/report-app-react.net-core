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
import { IntlProvider, addLocaleData } from "react-intl";
import intlEN from "react-intl/locale-data/en";
import intlFR from "react-intl/locale-data/fr";

const store = configureStore();
addLocaleData([...intlEN, ...intlFR]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: store.getState().language
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      let newLanguage = store.getState().language;
      if (this.state.language.title !== newLanguage.title) {
        this.setState({ language: newLanguage });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider
          locale={this.state.language.locale}
          messages={this.state.language.messages}
        >
          <Router>
            <div className="container-fluid">
              <div className="col App">
                <Header className="row" />
                <div className="row">
                  <div className="col-1">
                    <SideNav />
                  </div>
                  <div className="col-11">
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
            </div>
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
