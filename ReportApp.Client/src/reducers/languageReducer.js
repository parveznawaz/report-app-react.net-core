import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function languageReducer(
  state = initialState.languageConfig,
  action
) {
  return action.type === types.SET_ENGLISH || action.type === types.SET_FRENCH
    ? { ...state, ...action.payload }
    : state;
}
