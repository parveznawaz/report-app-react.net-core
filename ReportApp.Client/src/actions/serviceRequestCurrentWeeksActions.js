import axios from "axios";
import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError, endAjaxCall } from "./ajaxStatusActions";
import toastr from "toastr";

export const getServiceRequestCurrentWeeks = () => dispatch => {
  dispatch(beginAjaxCall());
  axios
    .get("/api/ServiceRequestReport/GetServiceRequestCurrentWeeks")
    .then(res => {
      dispatch({
        type: types.LOAD_SERVICE_REQUEST_CURRENT_WEEKS,
        payload: res.data
      });
      dispatch(endAjaxCall());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      toastr.error("Connection error");
    });
};
