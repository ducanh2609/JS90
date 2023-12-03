import { useEffect, useState } from "react";
import "./todo.scss";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [mode, setMode] = useState("Add");
  const [editId, setEditId] = useState(-1);
  const [messErr, setMessErr] = useState("");
  const handlerChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // fetch("https://640fee7ee1212d9cc9250d67.mockapi.io/api/v1/todo")
    //   .then(async (res) => {
    //     const data = await res.json();
    //     console.log(data);
    //     setTodos(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const data = JSON.parse(localStorage.getItem("todos"));
    console.log(data);
    setTodos(data || []);
  }, []);

  useEffect(() => {
    if (!value) {
      console.log("K được để trống");
      setMessErr("K được để trống");
    } else {
      setMessErr("");
    }
  }, [value]);
  const AddTodo = () => {
    if (messErr) return;
    const newTodo = {
      id: new Date().getTime(),
      todo: value,
      done: false,
    };
    // fetch(`https://640fee7ee1212d9cc9250d67.mockapi.io/api/v1/todo`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTodo),
    // }).then(async (res) => {
    //   console.log("todo", await res.json());
    // });
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTodos([...todos, newTodo]);
    setValue("");
  };
  const EditTodo = () => {
    if (messErr) return;
    todos.forEach((todo) => {
      if (todo.id === editId) {
        todo.todo = value;
      }
    });
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify([...todos]));
    // fetch(`https://640fee7ee1212d9cc9250d67.mockapi.io/api/v1/todo/${editId}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ todo: value }),
    // }).then(async (res) => {
    //   console.log("todo", await res.json());
    // });
    setValue("");
    setMode("Add");
  };
  const Del = (todo) => {
    const newTodos = todos.filter((item) => item.id !== todo.id);
    //   fetch(
    //     `https://640fee7ee1212d9cc9250d67.mockapi.io/api/v1/todo/${todo.id}`,
    //     {
    //       method: "DELETE",
    //     }
    //   ).then(async (res) => {
    //     console.log("todo", await res.json());
    //   });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  const Edit = (todo) => {
    setValue(todo.todo);
    setEditId(todo.id);
    setMode("Edit");
  };
  return (
    <div className="todo-list">
      <h1>TODOLIST</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <input type="text" value={value} onChange={handlerChange} />
          <p className="message-error" style={{ color: "red" }}>
            {messErr}
          </p>
        </div>
        <button onClick={mode === "Add" ? () => AddTodo() : () => EditTodo()}>
          {mode === "Add" ? "Add" : "Update"}
        </button>
      </div>
      <div className="content-box">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} Edit={Edit} Del={Del}></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
