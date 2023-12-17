import { useRef } from "react";

function RefComp() {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const handlerSubmit = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    console.log(username);
  };
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input ref={userNameRef} type="text" name="username" id="" /> <br />
      <label htmlFor="password">Password</label>
      <input ref={passwordRef} type="text" name="password" id="" />
      <br />
      <button onClick={handlerSubmit}>Submit</button>
    </form>
  );
}

export default RefComp;
