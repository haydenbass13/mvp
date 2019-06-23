import React from 'react';

const TimePicker = props => {
  return (
    <div className="timepicker">
      {props.date.date.getHours().toString()}:{props.date.date.getMinutes().toString()}
    </div>
  )
}

export default TimePicker;