import { combineReducers } from "redux";
//import listOfGtinNotReceived from "./listOfGtinNotReceivedReducer";
import weeks from "./weeksReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
//import defaultWeek from "./defaultWeekReducer";
import data from "./dataReducer";
import filters from "./filtersReducer";

const rootReducer = combineReducers({
  //listOfGtinNotReceived,
  weeks,
  ajaxCallsInProgress,
  //defaultWeek,
  data,
  filters
});

export default rootReducer;
