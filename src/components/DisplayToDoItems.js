import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { toDoListState } from "../atoms/atom-todolist";
import "../style/display.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DisplayToDoItems({ item }) {
  const [isEditing, setIsEditing] = useState(false);
  const [toDoList, setToDoList] = useRecoilState(toDoListState);
  const index = toDoList.findIndex((toDoItem) => toDoItem === item);

  const handleEditText = (e) => {
    const newToDoList = replaceItemAtIndex(index, toDoList, {
      ...item,
      text: e.target.value,
    });
    setToDoList(newToDoList);
  };

  const handleEditComplete = () => {
    const newToDoList = replaceItemAtIndex(index, toDoList, {
      ...item,
      isComplete: !item.isComplete,
    });
    setToDoList(newToDoList);
  };

  const handleDelete = () => {
    const newToDoList = removeItemAtIndex(index, toDoList);
    setToDoList(newToDoList);
  };

  const handleEditButton = () => {
    setIsEditing(!isEditing);
  };

  const fontAwesomeStyle = {
    fontSize: "20px",
    color: "#6c757d",
    backgroundColor: "transparent",
  };
  return (
    <div className="items">
      {!isEditing ? (
        <p>{item.text}</p>
      ) : (
        <input
          id="task"
          value={item.text}
          type="text"
          onChange={handleEditText}
        />
      )}
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={handleEditComplete}
      />
      <button onClick={handleDelete} id="deleteButton">
        Delete
      </button>
      {/* <button type="button" id="editButton" onClick={handleEditButton}> */}
      {isEditing ? (
        <button type="button" onClick={handleEditButton}>
          confirm
        </button>
      ) : (
        // "confirm"
        <button
          type="button"
          style={{ backgroundColor: "transparent" }}
          onClick={handleEditButton}
        >
          <FontAwesomeIcon
            style={fontAwesomeStyle}
            icon="fa-regular fa-pen-to-square"
          />
        </button>
      )}
      {/* </button> */}
    </div>
  );
}

function replaceItemAtIndex(index, arr, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(index, arr) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
