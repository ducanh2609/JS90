import { useState } from "react";
import "./form.scss";
import Input from "../plugin/Input";

function Login({ modeItem, setMode, dataForm, title }) {
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
    if (modeItem) {
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
    if (!modeItem) {
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
      setError(modeItem ? errorDefault : errorDefaultRegister);
      alert("login");
    }
  };
  const [user, setUser] = useState(
    modeItem ? userDefault : userDefaultRegister
  );
  const [error, setError] = useState(
    modeItem ? errorDefault : errorDefaultRegister
  );
  return (
    <div>
      <form className="login-form" onSubmit={handlerSubmit}>
        <h1>{title}</h1>
        {dataForm.map((item) => (
          <Input
            key={item.id}
            label={item.label}
            id={item.id}
            value={user[item.id]}
            handlerChange={handlerChange}
            keyInput={item.keyInput}
            errMess={error[item.id]}
          />
        ))}
        <button>Submit</button>
        <p onClick={() => setMode(!modeItem ? "login" : "register")}>
          {modeItem ? "Login" : "Register"}
        </p>
      </form>
    </div>
  );
}

export default Login;
