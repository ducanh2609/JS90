import { useContext } from "react";
import TodoContext from "./TodoConText";
import { useDispatch, useSelector } from "react-redux";
import { post, setValue } from "../../redux/slices/todoSlice";
import { useState } from "react";

function Button() {
  const dispatch = useDispatch();
  // const { mode, AddTodo, EditTodo } = useContext(TodoContext);
  const [mode, setMode] = useState("Add");
  const { value, editId, todos } = useSelector((state) => state);

  const AddTodo = () => {
    // if (messErr) return;
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
    // setTodos([...todos, newTodo]);
    dispatch(post(newTodo));
    // setValue("");
    dispatch(setValue(""));
  };
  const EditTodo = () => {
    if (messErr) return;
    todos.forEach((todo) => {
      if (todo.id === editId) {
        todo.todo = value;
      }
    });
    // setTodos([...todos]);
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
    dispatch(put(todos));
    dispatch(setValue(""));

    // setValue("");
    setMode("Add");
  };
  return (
    <button onClick={mode === "Add" ? () => AddTodo() : () => EditTodo()}>
      {mode === "Add" ? "Add" : "Update"}
    </button>
  );
}

export default Button;
