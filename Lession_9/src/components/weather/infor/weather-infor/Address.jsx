import { useContext } from "react";
import WeatherContext from "../../weatherContext";

function Address() {
  const { weatherInfor } = useContext(WeatherContext);

  return (
    <div className="address">
      <h1>{weatherInfor?.weather && weatherInfor?.weather[0]?.main}</h1>
      <p>
        {weatherInfor?.name} , {weatherInfor?.sys?.country}
      </p>
    </div>
  );
}

export default Address;
