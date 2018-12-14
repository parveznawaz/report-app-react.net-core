import { combineReducers } from "redux";
import listOfGtinNotReceived from "./listOfGtinNotReceivedReducer";
import weeks from "./weeksReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import defaultWeek from "./defaultWeekReducer";

const rootReducer = combineReducers({
  listOfGtinNotReceived,
  weeks,
  ajaxCallsInProgress,
  defaultWeek
});

export default rootReducer;
