import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function weeksReducer(state = initialState.weeks, action) {
  switch (action.type) {
    case types.LOAD_CURRENT_WEEKS:
      return { ...state, currentWeeks: [...action.payload] };
    case types.LOAD_DEFAULT_WEEK:
      return { ...state, defaultWeek: action.payload };
    default:
      return state;
  }
}
