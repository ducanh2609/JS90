import { useContext, useState } from "react";
import "./css/search-bar.scss";
import WeatherContext from "./weatherContext";

function SearchBar() {
  const [value, setValue] = useState("");
  const { setData } = useContext(WeatherContext);
  function handlerChange(e) {
    const val = e.target.value;
    setValue(val);
  }
  function searchWeather() {
    console.log(value);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&limit=5&appid=20c04dcb2200db4d43bd03e5034a01e4&units=metric&lang=vi`
    ).then(async (res) => {
      const data = await res.json();
      setData(data);
    });
  }
  return (
    <div className="search-bar">
      <input value={value} onChange={handlerChange} />
      <button onClick={() => searchWeather()}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
