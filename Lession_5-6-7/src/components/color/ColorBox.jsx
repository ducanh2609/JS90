import Color from "./Color";
import "./color.scss";

function ColorBox() {
  const colorDiv = [];
  const colorBox = () => {
    for (let i = 0; i < 18; i++) {
      colorDiv.push(<Color key={i} />);
    }
  };
  colorBox();
  return <div className="color-box">{colorDiv}</div>;
}

export default ColorBox;
