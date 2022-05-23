import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

function InputForm(props) {
  const [inputValue, setInputValue] = useState("");

  function changeValue(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={changeValue}
        type="text"
        autoComplete="off"
        placeholder="Add New Task"
        className="task-input"
      />
      <SubmitButton />
    </form>
  );
}

export default InputForm;
