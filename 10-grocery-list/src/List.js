import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = (props) => {
  return (
    <div className="grocery-list">
      {props.groceryList.map((listItem, index) => (
        <article key={index} className="grocery-item">
          <p className="title">{listItem}</p>
          <div className="btn-container">
            <button type="button" className="edit-btn">
              <FaEdit onClick={() => props.updateItem(index, listItem)} />
            </button>
            <button
              type="button"
              className="delete-btn"
              onClick={() => props.removeItem(index)}
            >
              <FaTrash />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default List;
