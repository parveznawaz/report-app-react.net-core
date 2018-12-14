import axios from "axios";
import * as types from "./actionTypes";
import { beginAjaxCall, ajaxCallError, endAjaxCall } from "./ajaxStatusActions";
import moment from "moment";
import { DateFormat } from "../config/Settings";
import toastr from "toastr";

export const getListOfGtinNotReceived = () => dispatch => {
  dispatch(beginAjaxCall());
  axios
    .get("/api/ServiceRequestReport/GetServiceRequestListofGTIN_NotReceived")
    .then(res => {
      res.data.forEach(row => {
        row.DateCreated = moment(row.DateCreated).format(DateFormat);
        row.DateUpdated = moment(row.DateUpdated).format(DateFormat);
        row.DateScheduled = moment(row.DateScheduled).format(DateFormat);
      });
      dispatch({
        type: types.LOAD_LIST_OF_GTIN_NOT_RECEIVED,
        payload: res.data
      });
      dispatch(endAjaxCall());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      toastr.error("Connection error");
    });
};
