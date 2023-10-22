import React from "react";
import { useRecoilState } from "recoil";
import { toDoFilterState } from "../atoms/atom-todolist";

export default function ToDoListFilter() {
  const [filter, setFilter] = useRecoilState(toDoFilterState);
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <div className="filter-section">
        <label htmlFor="filter-select">Filter</label>
        <select id="filter-select" value={filter} onChange={handleFilter}>
          <option value="Show all">All</option>
          <option value="Show complete">Complete</option>
          <option value="Show incomplete">inComplete</option>
        </select>
      </div>
    </>
  );
}
