import { combineReducers } from "redux";
import weeks from "./weeksReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import data from "./dataReducer";
import filters from "./filtersReducer";
import language from "./languageReducer";

const rootReducer = combineReducers({
  weeks,
  ajaxCallsInProgress,
  data,
  filters,
  language
});

export default rootReducer;
