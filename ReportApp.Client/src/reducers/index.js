import { combineReducers } from "redux";
import listOfGtinNotReceived from "./listOfGtinNotReceivedReducer";
import serviceRequestCurrentWeeks from "./serviceRequestCurrentWeeksReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  listOfGtinNotReceived,
  serviceRequestCurrentWeeks,
  ajaxCallsInProgress
});

export default rootReducer;
