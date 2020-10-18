import React from "react";
import ReactDOM from "react-dom";

import { Planet } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Planet />
  </React.StrictMode>,
  rootElement
);
