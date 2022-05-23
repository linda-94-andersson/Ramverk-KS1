import React, { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "./components/InputForm";
import AppenedList from "./components/AppenedList";
import "./style.css";

function App() {
  const [listItems, setListItems] = useState([]);

  const url = "http://localhost:5000/todos";

  const getTodos = async () => {
    const { data } = await axios.get(`${url}`);
    console.log(data, " get successfully");
    setListItems(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    const { data } = await axios.delete(`${url}/${id}`);
    setListItems(listItems.filter((item) => item.id !== id));
    console.log(data, "delete successfully");
  };

  async function handleSubmit(valueInput) {
    if (!valueInput) return;
    const { data } = await axios.post(`${url}`, {
      name: valueInput,
    });
    console.log(data, "post successfully");
    setListItems([...listItems, data]);
  }

  async function checkButton(id) {
    const index = listItems.findIndex((item) => item.id === id);
    if (index < 0) {
      return;
    }
    const { data } = await axios.patch(`${url}/${id}`, {
      completed: !listItems[index].completed,
    });
    const newItems = [...listItems];
    newItems[index] = data;
    console.log(data, "patch successfully");
    setListItems(newItems);
  }

  return (
    <div className="main-div">
      <h1>Time to add all the things you need to do!</h1>
      <section>
        <InputForm onSubmit={handleSubmit} />
        <AppenedList
          itemList={listItems}
          removeItem={deleteTodo}
          checkedItem={checkButton}
        />
      </section>
    </div>
  );
}

export default App;
