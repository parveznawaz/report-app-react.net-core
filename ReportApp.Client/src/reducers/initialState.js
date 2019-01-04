import messages_en from "../translations/en.json";

export default {
  languageConfig: {
    locale: "en",
    messages: messages_en,
    title: "Français"
  },
  listOfGtinNotReceived: [],
  weeks: {
    defaultWeek: 0,
    currentWeeks: []
  },
  ajaxCallsInProgress: 0,
  filters: {},
  data: {
    listOfGtinNotReceived: [],
    scheduledServiceRequests: [],
    incidentsReportsForItemReceived: []
  }
};
