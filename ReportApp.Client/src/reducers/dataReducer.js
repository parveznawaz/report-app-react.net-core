import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function listOfGtinNotReceivedReducer(
  state = initialState.data,
  action
) {
  switch (action.type) {
    case types.LOAD_LIST_OF_GTIN_NOT_RECEIVED:
      return { ...state, listOfGtinNotReceived: [...action.payload] };
    case types.LOAD_SCHEDULED_SERVICE_REQUESTS:
      return { ...state, scheduledServiceRequests: [...action.payload] };
    case types.LOAD_INCIDENTS_REPORTS_FOR_ITEM_RECEIVED:
      return { ...state, incidentsReportsForItemReceived: [...action.payload] };
    default:
      return state;
  }
}
