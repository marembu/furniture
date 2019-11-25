import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import "./js/spotlight.bundle.js";
//import './spotlight/js/spotlight.js'
import { ContextStoreContainer } from "./containers/ContextStore/";

const rootElement = document.getElementById("app");

ReactDOM.render(<ContextStoreContainer />, rootElement);
