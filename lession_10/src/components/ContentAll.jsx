import { useState } from "react";
import Computer from "./Computer";
import ComputerList from "./ComputerList";
import StoreInfor from "./StoreInfor";
import { useEffect } from "react";

function ContentAll() {
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
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <StoreInfor />
      </div>
      <div>
        <ComputerList datas={data} />
      </div>
      <div>
        <Computer datas={data} />
      </div>
    </>
  );
}

export default ContentAll;
