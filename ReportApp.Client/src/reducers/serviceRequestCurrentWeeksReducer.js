import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function serviceRequestCurrentWeeksReducer(
  state = initialState.serviceRequestCurrentWeeks,
  action
) {
  switch (action.type) {
    case types.LOAD_SERVICE_REQUEST_CURRENT_WEEKS:
      return Object.assign([], action.payload);
    default:
      return state;
  }
}
