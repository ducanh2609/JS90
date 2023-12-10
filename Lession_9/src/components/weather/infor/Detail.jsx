import { useContext } from "react";
import WeatherContext from "../weatherContext";

function Detail() {
  const { weatherInfor } = useContext(WeatherContext);
  const arr = [
    {
      icon: <img src="" alt="" />,
      infor: new Date(weatherInfor.sys.sunset).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      title: "sunset",
    },
    {
      icon: <img src="" alt="" />,
      infor: weatherInfor.main.humidity,
      title: "humidity",
    },
    {
      icon: <img src="" alt="" />,
      infor: weatherInfor.main.pressure,
      title: "pressure",
    },
    {
      icon: <img src="" alt="" />,
      infor: weatherInfor.wind.speed,
      title: "speed",
    },
  ];
  return (
    <div className="detail-box">
      {arr.map(({ icon, infor, title }, index) => (
        <div key={index}>
          <div className="icon box">{icon}</div>
          <div>
            <div className="infor box">{infor}</div>
            <div className="description box">{title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
