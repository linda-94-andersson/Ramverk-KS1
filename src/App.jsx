import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import InputForm from "./components/InputForm";
import AppenedList from "./components/AppenedList";
import "./style.css";

function App() {
  const [listItems, setListItems] = useState([]);

  const url = "http://localhost:5000/api/todos";

  const getTodos = async () => {
    const { data } = await axios.get(`${url}`);
    console.log(data, "getTodos-multi fetched successfully");
    setListItems(data);
  };
  
  const postTodos = async () => {
    const newTodo = listItems.forEach((item) => {
      console.log(item.id, item.name, item.completed);
      return item;
    });
  
    const { data } = await axios.post(`${url}`, 
    {
      task: newTodo
    });
    console.log(data, "postTodos successfully");
  };

  useEffect(() => {
    getTodos();
  }, []);

  function handleListItem(valueInput) {
    if (!valueInput) return;
    listItems.push({
      // id: uuidv4(),
      name: valueInput,
      completed: false,
    });
    setListItems([...listItems]);
    postTodos();
    console.log(listItems, " all  listItems");
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
