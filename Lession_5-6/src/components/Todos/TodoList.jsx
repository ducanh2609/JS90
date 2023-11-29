import { useState } from "react";
import "./todo.scss";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [mode, setMode] = useState("Add");
  const [editId, setEditId] = useState(-1);
  const handlerChange = (e) => {
    setValue(e.target.value);
  };
  const AddTodo = () => {
    const newTodo = {
      id: new Date().getTime(),
      title: value,
      isDone: "Progressing",
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };
  const EditTodo = () => {
    todos.forEach((todo) => {
      if (todo.id === editId) {
        todo.title = value;
      }
    });
    setTodos([...todos]);
    setValue("");
    setMode("Add");
  };
  const Del = (todo) => {
    const newTodos = todos.filter((item) => item.id !== todo.id);
    console.log(newTodos);
    setTodos(newTodos);
  };
  const Edit = (todo) => {
    setValue(todo.title);
    setEditId(todo.id);
    setMode("Edit");
  };
  return (
    <div className="todo-list">
      <h1>TODOLIST</h1>
      <input type="text" value={value} onChange={handlerChange} />
      <button onClick={mode === "Add" ? () => AddTodo() : () => EditTodo()}>
        {mode === "Add" ? "Add" : "Update"}
      </button>
      <div className="content-box">
        {todos.map((todo) => (
          <div key={todo.id} className="content-item">
            <div className="content-span">
              <span className="title">{todo.title}</span>
              <span className="status">{todo.isDone}</span>
            </div>
            <div className="button-editor">
              <button className="edit" onClick={() => Edit(todo)}>
                Edit
              </button>
              <button className="del" onClick={() => Del(todo)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
