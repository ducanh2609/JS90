import { useState } from "react";
import Computer from "./Computer";
import ComputerList from "./ComputerList";
import StoreInfor from "./StoreInfor";
import { useEffect } from "react";

function ContentAll() {
  return (
    <>
      <div>
        <StoreInfor />
      </div>
      <div>
        <ComputerList />
      </div>
      <div>
        <Computer />
      </div>
    </>
  );
}

export default ContentAll;
