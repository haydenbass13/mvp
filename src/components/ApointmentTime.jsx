import React from "react";

const TimePicker = props => {
  return (
    <div className="timepicker" onClick={() => console.log(props.date.date)}>
      {props.date.date.getHours().toString()}:
      {props.date.date.getMinutes().toString()}0
    </div>
  );
};

export default TimePicker;
