import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/actions/countActions";

const product1 = {
  name: "Dầu ăn",
  step: 3,
};
const product2 = {
  name: "Xà phòng",
  step: 1,
};

function CountChange() {
  const dispatch = useDispatch();
  const InCrement = (step) => {
    dispatch(increment(step));
  };
  const DeCrement = (step) => {
    dispatch(decrement(step));
  };
  return (
    <div>
      <div>
        <span>{product1.name}</span>:
        <button onClick={() => InCrement(product1.step)}>+</button>
        <button onClick={() => DeCrement(product1.step)}>-</button>
      </div>
      <div>
        <span>{product2.name}</span>:
        <button onClick={() => InCrement(product2.step)}>+</button>
        <button onClick={() => DeCrement(product2.step)}>-</button>
      </div>
    </div>
  );
}

export default CountChange;
