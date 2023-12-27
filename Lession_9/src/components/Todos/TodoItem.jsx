import { useContext } from "react";
import TodoContext from "./TodoConText";

function TodoItem({ todo }) {
  // const { Edit, Del } = useContext(TodoContext);
  return (
    <div className="content-item">
      <div className="content-span">
        <span className="title">{todo.todo}</span>
        <span className="status">
          {todo.done ? "Complete" : "Inprocess..."}
        </span>
      </div>
      <div className="button-editor">
        <button className="edit">Edit</button>
        <button className="del">Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
