import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function filtersReducer(state = initialState.filters, action) {
  return action.type === types.SET_FILTERS
    ? { ...state, ...action.payload }
    : state;
}
