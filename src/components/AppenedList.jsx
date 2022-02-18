import React from "react";
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";

function AppenedList(props) {
  return (
    <div>
      <ul>
        {props.itemList.map((item) => {
          return (
            <li key={item.key} className={item.completed ? "stroken" : ""}>
              {item.name}
              <div className="list-div">
                <button value={item.key} onClick={props.checkedItem}>
                  <AiOutlineCheckSquare className="checked" />
                </button>
                <button value={item.key} onClick={props.removeItem}>
                  <AiOutlineCloseSquare className="close" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppenedList;
