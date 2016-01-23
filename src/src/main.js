// -----------------------------
// Imports

import {Utils as Utils} from "./utils";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./router";



// -----------------------------
// Core

// Enable react dev-tools (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
window.React = React;



// -----------------------------
// Render

ReactDOM.render(
  <Root />,
  document.body
);