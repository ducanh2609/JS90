import { useState } from "react";
import "./App.css";
import RefComp from "./components/RefComp";
import MemoComp from "./components/MemoComp";

function App() {
  return (
    <>
      {/* <RefComp /> */}
      <MemoComp />
    </>
  );
}

export default App;
