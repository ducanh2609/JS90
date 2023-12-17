// import { useEffect } from "react";
import { useEffect } from "react";
import { COMPUTER_LIST_GROUP } from "../../utils/constans";
import "./computer-list.scss";
// import axios from "axios";

function ComputerList() {
  return (
    <div>
      <div className="list-bar">Bar</div>
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
