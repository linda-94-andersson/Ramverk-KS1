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
              <button value={item.key} onClick={props.checkedItem}>
                <AiOutlineCheckSquare />
              </button>
              <button value={item.key} onClick={props.removeItem}>
                <AiOutlineCloseSquare />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppenedList;
