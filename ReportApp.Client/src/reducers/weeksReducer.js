import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function weeksReducer(state = initialState.weeks, action) {
  switch (action.type) {
    case types.LOAD_CURRENT_WEEKS:
      return Object.assign([], action.payload);
    default:
      return state;
  }
}
