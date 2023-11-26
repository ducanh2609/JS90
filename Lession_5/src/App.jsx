import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";

function App() {
  const [mode, setMode] = useState("login");
  return (
    <div>
      {mode === "login" ? (
        <Form modeItem="login" setMode={setMode} />
      ) : (
        <Form modeItem="register" setMode={setMode} />
      )}
    </div>
  );
}

export default App;
