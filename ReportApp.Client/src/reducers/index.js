import { combineReducers } from "redux";
import weeks from "./weeksReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import data from "./dataReducer";
import filters from "./filtersReducer";

const rootReducer = combineReducers({
  weeks,
  ajaxCallsInProgress,
  data,
  filters
});

export default rootReducer;
