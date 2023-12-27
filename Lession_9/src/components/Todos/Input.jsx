import { useContext } from "react";
import TodoContext from "./TodoConText";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../redux/slices/todoSlice";

function Input() {
  // const [value, setValue] = useState("");
  const value = useSelector(({ value }) => value);
  const [messErr, setMessErr] = useState("");
  const dispatch = useDispatch();
  // const { value, handlerChange, messErr } = useContext(TodoContext);
  const handlerChange = (e) => {
    // setValue(e.target.value);
    dispatch(setValue(e.target.value));
  };
  useEffect(() => {
    if (!value) {
      console.log("K được để trống");
      setMessErr("K được để trống");
    } else {
      setMessErr("");
    }
  }, [value]);
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
