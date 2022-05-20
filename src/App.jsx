import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import AppenedList from "./components/AppenedList";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import { deleteTodo } from "./actions/deleteTodo";
import { patchTodo } from "./actions/patchTodo";
import { putTodo } from "./actions/putTodo";
import { postTodo } from "./actions/postTodo";
import axios from "axios";

function App() {
  const [listItems, setListItems] = useState([]);

  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:5000/api/todos");
    setListItems(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  function handleListItem(valueInput) {
    if (!valueInput) return;
    listItems.push({
      name: valueInput,
      completed: false,
      id: uuidv4(),
    });
    setListItems([...listItems]);
    console.log(listItems);
  }

  function closeButton(e) {
    const key = e.currentTarget.value;
    const index = listItems.findIndex((items) => {
      return items.key === key;
    });
    listItems.splice(index, 1);
    deleteTodo();
    setListItems([...listItems]);
  }

  function checkButton(e) {
    // setListItems(
    //   [...listItems].map((t) =>
    //     t.id !== listItems.id ? t : { ...t, completed: !t.completed }
    //   )
    // );
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
      <section>
        <InputForm onSubmit={handleListItem} />
        <AppenedList
          itemList={listItems}
          removeItem={closeButton}
          checkedItem={checkButton}
        />
      </section>
    </div>
  );
}

export default App;
