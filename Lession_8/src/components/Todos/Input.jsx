import { useContext } from "react";
import TodoContext from "./TodoConText";

function Input() {
  const { value, handlerChange, messErr } = useContext(TodoContext);

  return (
    <div>
      <input type="text" value={value} onChange={handlerChange} />
      <p className="message-error" style={{ color: "red" }}>
        {messErr}
      </p>
    </div>
  );
}

export default Input;
