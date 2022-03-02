import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(["first", "second"]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing === false) {
      setList([item, ...list]);
      setItem("");
    } else {
      setEditing(false);
      // setList(
      //   list.map((listItem, index) => {
      //     if (index === editIndex) {
      //       return item;
      //     }
      //     return listItem;
      //   })
      // );
      list[editIndex] = item;
      setList(list);
      setItem("");
      setEditIndex(null);
    }
  };

  const handleRemove = (clickedIndex) => {
    setList(
      list.filter((element, index) => {
        return index !== clickedIndex;
      })
    );
  };

  const handleUpdate = (clickedIndex, text) => {
    console.log(clickedIndex);
    console.log(text);
    setItem(text);
    setEditing(true);
    setEditIndex(clickedIndex);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn" value={item}>
            Save
          </button>
        </div>
      </form>

      <div className="grocery-container">
        <List
          groceryList={list}
          updateItem={handleUpdate}
          removeItem={handleRemove}
        />
        <button className="clear-btn" onClick={() => setList([])}>
          Clear all
        </button>
      </div>
    </section>
  );
}

export default App;
