import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { toDoListState } from "../atoms/atom-todolist";
import Swal from "sweetalert2";
import "../style/create.css";
import ToDoListFilter from "./ToDoListFilter";

export default function CreateToDoItem() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useRecoilState(toDoListState);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleButton = () => {
    if (inputValue.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There is To-Do to add!",
      });
    } else {
      setToDoList([
        ...toDoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="create-todo">
      {/* <label htmlFor="todo">Type Your todo</label>
      <br /> */}
      <input
        id="todo"
        name="todo-item"
        value={inputValue}
        onChange={handleInput}
        placeholder="Type Your Task"
        autoFocus
      />
      <button onClick={handleButton}>Add</button>
      <ToDoListFilter />
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
