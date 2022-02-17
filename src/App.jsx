import React, { useState } from "react";
import InputForm from "./components/InputForm";
import AppenedList from "./components/AppenedList";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleListItem(valueInput) {
    listItems.push({
      name: valueInput,
      completed: false,
      key: uuidv4(),
    });
    setListItems([...listItems]);
  }

  function closeButton(e) {
    const key = e.currentTarget.value;
    const index = listItems.findIndex((items) => {
      return items.key === key;
    });
    listItems.splice(index, 1);
    setListItems([...listItems]);
  }

  function checkButton(e) {
    const key = e.currentTarget.value;
    const item = listItems.find((items) => {
      return items.key === key;
    });
    item.completed = true;
    setListItems([...listItems]);
  }

  return (
    <div className="main-div">
      <h1>Time to add all the things you need to do!</h1>
      <InputForm onSubmit={handleListItem} />
      <AppenedList
        itemList={listItems}
        removeItem={closeButton}
        checkedItem={checkButton}
      />
    </div>
  );
}

export default App;
