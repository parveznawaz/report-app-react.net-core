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

export const getScheduleServiceRequests = (
  startWeekId,
  endWeekId,
  receivedId,
  resultId
) => dispatch => {
  dispatch(beginAjaxCall());
  axios
    .get(
      "/api/ServiceRequestReport/SR_ScheduledServiceRequests/" +
        startWeekId +
        "/" +
        endWeekId +
        "/" +
        receivedId +
        "/" +
        resultId
    )
    .then(res => {
      dispatch({
        type: types.LOAD_SCHEDULED_SERVICE_REQUESTS,
        payload: res.data
      });
      dispatch(endAjaxCall());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      toastr.error("Connection error");
    });
};

export const getIncidentsReportsForItemReceived = (
  startWeekId,
  endWeekId,
  isExternalId,
  incidentId
) => dispatch => {
  dispatch(beginAjaxCall());
  axios
    .get(
      "/api/ServiceRequestReport/SR_ScheduledReportListGtin/" +
        startWeekId +
        "/" +
        endWeekId +
        "/" +
        isExternalId +
        "/" +
        incidentId
    )
    .then(res => {
      dispatch({
        type: types.LOAD_INCIDENTS_REPORTS_FOR_ITEM_RECEIVED,
        payload: res.data
      });
      dispatch(endAjaxCall());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      toastr.error("Connection error");
    });
};
