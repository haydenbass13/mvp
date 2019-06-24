import React from "react";

const Day = props => {
  let color = "white";
  if (props.value === true) color = "red";
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (props.date.getMonth() === new Date().getMonth()) {
    return props.date.getDate() >= new Date().getDate() ? (
      <div
        id={props.index}
        className={color}
        style={{
          backgroundColor: "",
          borderStyle: "solid",
          borderWidth: 1,
          height: "auto",
          verticalAlign: "center"
        }}
        onClick={props.click}
      >
        <p
          style={{ fontSize: 20, marginBottom: 5, marginTop: 5 }}
          id={props.index}
        >
          {days[props.date.getDay()]}
        </p>
        <p
          style={{ marginTop: 1, marginBottom: 0, fontSize: 40 }}
          id={props.index}
        >
          {props.date.getDate()}
        </p>
      </div>
    ) : (
      <div
        id={props.index}
        className={color}
        style={{
          backgroundColor: "gray",
          borderStyle: "solid",
          borderWidth: 1,
          height: "auto",
          verticalAlign: "center"
        }}
      >
        <p
          style={{ fontSize: 20, marginBottom: 5, marginTop: 5 }}
          id={props.index}
        >
          {days[props.date.getDay()]}
        </p>
        <p
          style={{ marginTop: 1, marginBottom: 0, fontSize: 40 }}
          id={props.index}
        >
          {props.date.getDate()}
        </p>
      </div>
    );
  } else {
    return props.date >= new Date() ? (
      <div
        id={props.index}
        className={color}
        style={{
          backgroundColor: "",
          borderStyle: "solid",
          borderWidth: 1,
          height: "auto",
          verticalAlign: "center"
        }}
        onClick={props.click}
      >
        <p
          style={{ fontSize: 20, marginBottom: 5, marginTop: 5 }}
          id={props.index}
        >
          {days[props.date.getDay()]}
        </p>
        <p
          style={{ marginTop: 1, marginBottom: 0, fontSize: 40 }}
          id={props.index}
        >
          {props.date.getDate()}
        </p>
      </div>
    ) : (
      <div
        id={props.index}
        className={color}
        style={{
          backgroundColor: "gray",
          borderStyle: "solid",
          borderWidth: 1,
          height: "auto",
          verticalAlign: "center"
        }}
      >
        <p
          style={{ fontSize: 20, marginBottom: 5, marginTop: 5 }}
          id={props.index}
        >
          {days[props.date.getDay()]}
        </p>
        <p
          style={{ marginTop: 1, marginBottom: 0, fontSize: 40 }}
          id={props.index}
        >
          {props.date.getDate()}
        </p>
      </div>
    );
  }
};

export default Day;
