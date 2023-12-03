import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ColorBox from "./components/color/ColorBox";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [mode, setMode] = useState("login");
  const loginForm = [
    {
      id: "username",
      label: "Username",
      keyInput: "username",
    },
    {
      id: "password",
      label: "Password",
      keyInput: "password",
    },
  ];
  const registerForm = [
    {
      id: "username",
      label: "Username",
      keyInput: "username",
    },
    {
      id: "email",
      label: "Email",
      keyInput: "email",
    },
    {
      id: "password",
      label: "Password",
      keyInput: "password",
    },
    {
      id: "confirm",
      label: "Confirm Password",
      keyInput: "confirm",
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  const isLoginForm = mode === "login";
  return (
    <div>
      {/* <Form
        dataForm={isLoginForm ? loginForm : registerForm}
        modeItem={isLoginForm}
        setMode={setMode}
        title={isLoginForm ? "LOGIN" : "REGISTER"}
      /> */}
      {/* <ColorBox /> */}

      {isOpen && <TodoList />}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Close
      </button>
    </div>
  );
}

export default App;
