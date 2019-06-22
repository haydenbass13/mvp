import React from "react";
import { hydrate } from "react-dom";
import App from "./components/App";

hydrate(
  <App className='App' schedule={window.__SCHEDULE__} employee={window.__EMPLOYEE__} />,
  document.getElementById("root"),
);
