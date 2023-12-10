import Address from "./weather-infor/Address";
import Temperature from "./weather-infor/Temperature";
import Time from "./weather-infor/Time";

function WeatherInfor() {
  return (
    <div className="weather-infor">
      <Temperature />
      <Address />
      <Time />
    </div>
  );
}

export default WeatherInfor;
