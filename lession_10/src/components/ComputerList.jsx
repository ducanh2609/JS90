// import { useEffect } from "react";
import { useEffect } from "react";
import { COMPUTER_LIST_GROUP } from "../../utils/constans";
import "./computer-list.scss";
import Search from "./Search";
// import axios from "axios";

function ComputerList({ datas }) {
  return (
    <div className="computer-list-side">
      <div className="list-bar">
        <Search data={datas} />
      </div>
      <div className="computer-list">
        <div className="list">
          {COMPUTER_LIST_GROUP.map((item) => (
            <div className="list-item" key={item.value}>
              <img src={item.icon} alt="" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <div className="image">Image</div>
      </div>
    </div>
  );
}

export default ComputerList;
