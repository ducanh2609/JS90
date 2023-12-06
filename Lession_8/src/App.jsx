import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ColorBox from "./components/color/ColorBox";
import TodoList from "./components/Todos/TodoList";
import { LOGIN_FORM, REGISTER_FORM } from "../utils/constant";
import WeatherApp from "./components/weather/weatherApp";

function App() {
  const [mode, setMode] = useState("login");
  const [isOpen, setIsOpen] = useState(true);
  const isLoginForm = mode === "login";
  return (
    <div>
      {/* <Form
        dataForm={isLoginForm ? LOGIN_FORM : REGISTER_FORM}
        modeItem={isLoginForm}
        setMode={setMode}
        title={isLoginForm ? "LOGIN" : "REGISTER"}
      /> */}
      {/* <ColorBox /> */}

      {/* {isOpen && <TodoList />}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Close
      </button> */}
      <WeatherApp />
    </div>
  );
}

export default App;
