import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import "./js/spotlight.bundle.js";
import { ContextStoreContainer } from "./containers/ContextStore/";

const rootElement = document.getElementById("root");
ReactDOM.render(<ContextStoreContainer />, rootElement);
