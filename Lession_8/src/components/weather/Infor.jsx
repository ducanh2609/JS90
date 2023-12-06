import { useContext } from "react";
import "./css/infor.scss";
import Detail from "./infor/Detail";
import WeatherIcon from "./infor/WeatherIcon";
import WeatherInfor from "./infor/WeatherInfor";
import WeatherContext from "./weatherContext";

function Infor() {
  const { weatherInfor } = useContext(WeatherContext);
  console.log("yes", weatherInfor);
  return (
    <div className="infor">
      <WeatherIcon />
      <WeatherInfor />
      <Detail />
    </div>
  );
}

export default Infor;
