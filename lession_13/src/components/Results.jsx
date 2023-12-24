import { useReducer, useState } from "react";
import { useSelector } from "react-redux";

function Results() {
  const counter = useSelector(({ counter }) => counter);
  console.log("counter", counter);
  return <div>{counter}</div>;
}

export default Results;
