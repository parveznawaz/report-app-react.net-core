import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function defaultWeekReducer(
  state = initialState.defaultWeek,
  action
) {
  return action.type === types.LOAD_DEFAULT_WEEK ? action.payload : state;
}
