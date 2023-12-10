import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ColorBox from "./components/color/ColorBox";
import TodoList from "./components/Todos/TodoList";
import { LOGIN_FORM, REGISTER_FORM } from "../utils/constant";
import WeatherApp from "./components/weather/weatherApp";
import { Routes, Route } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";

function App() {
  const [mode, setMode] = useState("login");
  const isLoginForm = mode === "login";
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route
          path="form"
          element={
            <Form
              dataForm={isLoginForm ? LOGIN_FORM : REGISTER_FORM}
              modeItem={isLoginForm}
              setMode={setMode}
              title={isLoginForm ? "LOGIN" : "REGISTER"}
            />
          }
        />
        <Route path="todo" element={<TodoList />} />
        <Route path="color" element={<ColorBox />} />
        <Route path="weather" element={<WeatherApp />} />
      </Route>
    </Routes>
  );
}

export default App;
