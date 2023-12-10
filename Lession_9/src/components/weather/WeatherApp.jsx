import { useState } from "react";
import Infor from "./Infor";
import SearchBar from "./SearchBar";
import "./css/weather-app.scss";
import WeatherContext from "./weatherContext";

function WeatherApp() {
  const [weatherInfor, setWeatherInfor] = useState({});
  const dataContext = { weatherInfor, setData };
  function setData(data) {
    setWeatherInfor(data);
  }
  return (
    <WeatherContext.Provider value={dataContext}>
      <div className="weather-app">
        <SearchBar />
        <Infor />
      </div>
    </WeatherContext.Provider>
  );
}

export default WeatherApp;
