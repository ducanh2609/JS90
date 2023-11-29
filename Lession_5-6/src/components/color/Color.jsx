import { useState } from "react";

function Color() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const colorDefault = `rgb(${red},${blue},${green})`;
  const [color, setColor] = useState(colorDefault);
  const changeColor = () => {
    setInterval(() => {
      const red = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const colorBack = `rgb(${red},${blue},${green})`;
      setColor(colorBack);
    }, 1000);
  };
  return (
    <div
      className="color"
      style={{ backgroundColor: color }}
      onClick={() => changeColor()}
    ></div>
  );
}

export default Color;
