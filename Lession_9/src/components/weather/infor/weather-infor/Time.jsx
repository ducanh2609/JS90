import { useEffect, useState } from "react";

function Time() {
  const [hour, setHour] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    })
  );
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const setTime = () => {
    setDate(new Date().toLocaleDateString());
    setHour(
      new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })
    );
  };
  useEffect(() => {
    setInterval(setTime);
    return () => {
      clearInterval(setTime);
    };
  }, []);
  return (
    <div className="time">
      <h1>{date},</h1>
      <h1>{hour}</h1>
    </div>
  );
}

export default Time;
