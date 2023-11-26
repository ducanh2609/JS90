import { useState } from "react";
import "./form.scss";
import Input from "../plugin/Input";

function Login({ modeItem, setMode }) {
  const userDefault = {
    username: "",
    password: "",
  };
  const userDefaultRegister = {
    username: "",
    password: "",
  };
  const errorDefault = {
    username: "",
    password: "",
  };
  const errorDefaultRegister = {
    username: "",
    password: "",
  };
  const handlerChange = (e, key) => {
    const newUser = { ...user, [key]: e.target.value };
    setUser(newUser);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    let isAbleLogin = true;
    if (modeItem === "login") {
    }
    if (!user.username) {
      error.username = "Username không được để trống";
      isAbleLogin = false;
    } else {
      error.username = "";
    }
    if (user.password.length < 6 || user.password.length > 12) {
      error.password = "Password có độ dài từ 6 - 12";
      isAbleLogin = false;
    } else {
      error.password = "";
    }
    if (modeItem !== "login") {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regex.test(user.email)) {
        error.email = "Email k đúng";
        isAbleLogin = false;
      } else {
        error.email = "";
      }
      if (user.confirm !== user.password) {
        error.confirm = "Password k khớp";
        isAbleLogin = false;
      } else {
        error.confirm = "";
      }
    }
    if (!isAbleLogin) {
      setError({ ...error });
      return;
    } else {
      setError(modeItem === "login" ? errorDefault : errorDefaultRegister);
      alert("login");
    }
  };
  const [user, setUser] = useState(
    modeItem === "login" ? userDefault : userDefaultRegister
  );
  const [error, setError] = useState(
    modeItem === "login" ? errorDefault : errorDefaultRegister
  );

  return (
    <div>
      <form className="login-form" onSubmit={handlerSubmit}>
        <h1>{modeItem === "login" ? "LOGIN" : "REGISTER"}</h1>
        <Input
          label="Username"
          id="username"
          value={user.username}
          handlerChange={handlerChange}
          keyInput="username"
          errMess={error.username}
        />
        {modeItem !== "login" ? (
          <Input
            label="Email"
            id="email"
            value={user.email}
            handlerChange={handlerChange}
            keyInput="email"
            errMess={error.email}
          />
        ) : (
          ""
        )}
        <Input
          label="Password"
          id="password"
          value={user.password}
          handlerChange={handlerChange}
          keyInput="password"
          errMess={error.password}
        />
        {modeItem !== "login" ? (
          <Input
            label="Confirm Password"
            id="confirm"
            value={user.confirm}
            handlerChange={handlerChange}
            keyInput="confirm"
            errMess={error.confirm}
          />
        ) : (
          ""
        )}
        <button>Submit</button>
        <p onClick={() => setMode(modeItem !== "login" ? "login" : "register")}>
          {modeItem !== "login" ? "Login" : "Register"}
        </p>
      </form>
    </div>
  );
}

export default Login;
