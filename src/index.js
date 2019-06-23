import React from "react";
import { hydrate } from "react-dom";
import App from "./components/App";
import './App.css'

hydrate(
  <App className='App' schedule={window.__SCHEDULE__}/>,
  document.getElementById("root"),
);
