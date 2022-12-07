import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [inputText, setIputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setIputText(newValue);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    console.log(typeof inputText);
  }
  function deleteItem() {
    setItems(() => {
      return items.splice(1, 0);
    });
    console.log(items.length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
        <button className="DeleteAll" onClick={deleteItem}>
          <span>Delete All</span>
        </button>
      </div>
      <div className="list">
        <ul>
          {items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
