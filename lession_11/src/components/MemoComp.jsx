import { useEffect, useMemo, useRef, useState } from "react";
import Infor from "./Infor";

function MemoComp() {
  const [user, setUser] = useState([]);
  const nameRef = useRef();
  const ageRef = useRef();

  const Submit = () => {
    setUser([nameRef.current.value, ageRef.current.value]);
  };
  return (
    <>
      <Infor user={user} />
      Change Infor: <button onClick={Submit}>Change</button> <br />
      <label htmlFor="name"></label>
      <input ref={nameRef} type="text" name="name" /> <br />
      <label htmlFor="age"></label>
      <input ref={ageRef} type="text" name="age" />
    </>
  );
}

export default MemoComp;
