import axios from "axios";
import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError, endAjaxCall } from "./ajaxStatusActions";
import toastr from "toastr";

export const getCurrentWeeks = () => dispatch => {
  dispatch(beginAjaxCall());
  axios
    .get("/api/ServiceRequestReport/GetServiceRequestCurrentWeeks")
    .then(res => {
      dispatch({
        type: types.LOAD_CURRENT_WEEKS,
        payload: res.data
      });
      dispatch(endAjaxCall());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      toastr.error("Connection error");
    });
};

export const getDefaultWeek = () => dispatch => {
  dispatch(beginAjaxCall());
  axios
    .get("/api/ServiceRequestReport/GetServiceRequestDefaultWeek")
    .then(res => {
      dispatch({
        type: types.LOAD_DEFAULT_WEEK,
        payload: res.data
      });
      dispatch(endAjaxCall());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      toastr.error("Connection error");
    });
};
