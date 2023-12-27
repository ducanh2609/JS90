import { useSelector } from "react-redux";
import "./computer.scss";
import Card from "./Card";
import { getComputer } from "../redux/stores/selector";

function Computer() {
  // const list = useSelector(({ computerList }) => computerList);
  const list = useSelector(getComputer).computerList;

  console.log("list", list);
  return (
    <div className="item-content">
      {list.length &&
        list.map(({ id, name, price, image }) => (
          <Card key={id} name={name} price={price} image={image}></Card>
        ))}
    </div>
  );
}

export default Computer;
