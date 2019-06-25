import React from "react";
import { slideInRight, zoomIn, fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const TimePicker = props => {
  return (
    <button
      className="timepicker"
      onClick={() => props.select(props.date)}
    >
      {props.date.date.getHours().toString()}:
      {props.date.date.getMinutes().toString()}0
    </button>
  );
};

export default TimePicker;
