import { useContext } from "react";
import TodoContext from "./TodoConText";

function Button() {
  const { mode, AddTodo, EditTodo } = useContext(TodoContext);
  return (
    <button onClick={mode === "Add" ? () => AddTodo() : () => EditTodo()}>
      {mode === "Add" ? "Add" : "Update"}
    </button>
  );
}

export default Button;
