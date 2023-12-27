import { useContext } from "react";
import TodoItem from "./TodoItem";
import "./todo.scss";
import TodoContext from "./TodoConText";
import Button from "./Button";
import Input from "./Input";
import { useSelector } from "react-redux";

function Todo() {
  // const { todos } = useContext(TodoContext);
  const todos = useSelector(({ todos }) => todos);
  return (
    <div className="todo-list">
      <h1>TODOLIST</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input />
        <Button />
      </div>
      <div className="content-box">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default Todo;
