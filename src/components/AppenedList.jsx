import React from "react";
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";

function AppenedList(props) {
  return (
    <div>
      <ul>
        {props.itemList.map((item) => {
          return (
            <li key={item.id} className={item.completed ? "stroken" : ""}>
              {item.name}
              <div className="list-div">
                <button onClick={() => props.checkedItem(item.id)}>
                  <AiOutlineCheckSquare className="checked" />
                </button>
                <button onClick={() => props.removeItem(item.id)}>
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
