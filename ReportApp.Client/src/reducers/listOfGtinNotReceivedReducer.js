import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function listOfGtinNotReceivedReducer(state = initialState.listOfGtinNotReceived, action) {
  switch (action.type) {
    case types.LOAD_LIST_OF_GTIN_NOT_RECEIVED_SUCCESS:
        return Object.assign([],action.payload);      
    default:
          return state;
  }
}