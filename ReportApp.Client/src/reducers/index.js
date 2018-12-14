import { combineReducers } from "redux";
import listOfGtinNotReceived from "./listOfGtinNotReceivedReducer";
import weeks from "./weeksReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  listOfGtinNotReceived,
  weeks,
  ajaxCallsInProgress
});

export default rootReducer;
