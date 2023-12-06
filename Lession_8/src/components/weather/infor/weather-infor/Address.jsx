import { useContext } from "react";
import WeatherContext from "../../weatherContext";

function Address() {
  const { weatherInfor } = useContext(WeatherContext);

  return (
    <div className="address">
      <p>{weatherInfor?.weather && weatherInfor?.weather[0]?.main}</p>
      <p>
        {weatherInfor?.name} , {weatherInfor?.sys?.country}
      </p>
    </div>
  );
}

export default Address;
