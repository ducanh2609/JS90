import { useState } from "react";
import "./coin.scss";

const a = [1];
const b = [1];
a == b;
a === b;

const obj = {};
if (JSON.stringify(obj) === "{}") {
  console.log("rỗng");
} else {
  console.log("k rỗng");
}

function Coin() {
  const flip = ["./public/image/back.jpg", "./public/image/front.jpg"];
  const [total, setTotal] = useState(0);
  const [link, setLink] = useState(flip[0]);
  const [head, setHead] = useState(0);
  const [tail, setTail] = useState(0);

  function handlerClick() {
    if (total >= 10) {
      setTotal(0);
      setHead(0);
      setTail(0);
      setLink("");
      return;
    }
    const index = Math.random().toFixed(0);
    if (+index === 1) setHead(head + 1);
    else setTail(tail + 1);
    setLink(flip[index]);
    setTotal(total + 1);
  }
  return (
    <div className="coin-page">
      <h1>Let's flip a coin</h1>
      <img src={link} alt="" />
      <button onClick={() => handlerClick()}>FLIP ME!!</button>
      <p>
        Out of {total} flips, there have been {head} heads and {tail} tails
      </p>
    </div>
  );
}

export default Coin;
