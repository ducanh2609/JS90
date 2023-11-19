import { useState } from "react";
import Button from "../common/Button";
import Footer from "../layouts/Footer";
import SideBar from "./Sidebar";
import "./content.scss";

// const styleSideBar1 = {
//   backgroundColor: "yellow",
//   width: "100px",
// };
const styleSideBar2 = {
  backgroundColor: "blue",
  width: "50px",
};
const isLogin = false;

export default function Content() {
  const [color, setColor] = useState("red");
  const [backgroundColor, setBackgroundColor] = useState("red");

  const handlerClick = (changeColor) => {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    setColor(changeColor);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="content-box">
      <div className="content">
        <SideBar styleSideBar={{ color, backgroundColor }} />
        <div className="body">
          <button onClick={() => handlerClick("blue")}>Click Blue</button>
          <button onClick={() => handlerClick("red")}>Click Red</button>
          {!isLogin ? <Button title={"Login"} /> : <Button title={"Logout"} />}
        </div>
        <SideBar styleSideBar={styleSideBar2} />
      </div>
      <Footer />
    </div>
  );
}
