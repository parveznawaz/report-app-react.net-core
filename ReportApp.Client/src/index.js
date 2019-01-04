import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/@progress/kendo-theme-default/dist/all.css";
import "../node_modules/toastr/build/toastr.min.css";

// const messages = {
//   en: messages_en,
//   fr: messages_fr
// };
//const language = navigator.language.split(/[-_]/)[0];
//const language = "en";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
