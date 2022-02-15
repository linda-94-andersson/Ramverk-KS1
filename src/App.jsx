import React, { useState } from "react";
import InputForm from "./components/InputForm";
import AppenedList from "./components/AppenedList";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleListItem(valueInput) {
    listItems.push(valueInput);
    setListItems([...listItems]);
  }

  return (
    <div>
      <h1>Time add the things you need to do!</h1>
      <InputForm onSubmit={handleListItem} />
      <ul>{listItems.map((item, index) =>{
        return <li key={index}>{item}</li>
      })}</ul>
      <AppenedList />
    </div>
  );
}

export default App;
