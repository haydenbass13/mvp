import React from "react";
import styled from "styled-components";
import { transform } from "@babel/core";

const Day = props => {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div
      className={props.index}
      style={{
        backgroundColor: "",
        borderStyle: "solid",
        borderWidth: 1,
        height: "auto",
        fontSize: 25,
        verticalAlign: "center"
      }}
      onClick={props.click}
    >
      <p className={props.index}>{days[props.date.getDay()]}</p>
      <h2 className={props.index}>{props.date.getDate()}</h2>
    </div>
  );
};

export default Day;
