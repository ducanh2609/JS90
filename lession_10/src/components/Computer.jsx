import { useState } from "react";
import { useEffect } from "react";
import { COMPUTER_LIST_GROUP } from "../../utils/constans";
import Card from "./Card";

function Computer({ setComputerList }) {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const fetchData = async () => {
      // const res = await axios.put(
      //   "https://640fee7ee1212d9cc9250d67.mockapi.io/api/v1/todo/1"
      // );
      // console.log("res", res.data);
      const res = await fetch("/data-base/computer.json");
      const dataJson = await res.json();
      setData(dataJson);
      setComputerList(dataJson);
    };
    fetchData();
  }, []);
  return (
    <div className="item-box">
      {COMPUTER_LIST_GROUP.map((group) => (
        <>
          <div className="item-group">
            <div className="item-group-box">
              <h3>
                <img src={group.icon} alt="" />
                {group.title}
              </h3>
            </div>
          </div>
          <div className="item-content">
            {data
              ?.filter((item) => item.group === group.value)
              .map((item) => (
                <Card item={item} />
              ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default Computer;
