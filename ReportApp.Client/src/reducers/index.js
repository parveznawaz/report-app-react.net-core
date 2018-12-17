import { combineReducers } from "redux";
import listOfGtinNotReceived from "./listOfGtinNotReceivedReducer";
import weeks from "./weeksReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import defaultWeek from "./defaultWeekReducer";
import filters from "./filtersReducer";

const rootReducer = combineReducers({
  listOfGtinNotReceived,
  weeks,
  ajaxCallsInProgress,
  defaultWeek,
  filters
});

export default rootReducer;
