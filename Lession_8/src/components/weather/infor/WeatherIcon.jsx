import { useContext } from "react";
import WeatherContext from "../weatherContext";

function WeatherIcon() {
  const { weatherInfor } = useContext(WeatherContext);
  const icon = weatherInfor?.weather && weatherInfor?.weather[0]?.icon;
  const link = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className="weather-icon">
      <img src={link} alt="err" />
    </div>
  );
}

export default WeatherIcon;
