import { useContext } from "react";
import WeatherContext from "../../weatherContext";

function Temperature() {
  const { weatherInfor } = useContext(WeatherContext);

  return (
    <div className="temp">
      <h1>
        {weatherInfor?.main?.temp}
        <sup>o</sup>
      </h1>
    </div>
  );
}

export default Temperature;
