import { useSelector } from "react-redux";
import "./computer.scss";
import Card from "./Card";

function Computer() {
  const list = useSelector(({ computerList }) => computerList);
  return (
    <div className="item-content">
      {list.map(({ id, name, price, image }) => (
        <Card key={id} name={name} price={price} image={image}></Card>
      ))}
    </div>
  );
}

export default Computer;
