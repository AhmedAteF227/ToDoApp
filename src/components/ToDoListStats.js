import React from "react";
import { useRecoilValue } from "recoil";
import { toDoListStatsState } from "../atoms/atom-todolist";
import "../style/stats.css";

export default function ToDoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalInCompletedNum,
    percentageCompleted,
  } = useRecoilValue(toDoListStatsState);
  return (
    <div className="stats">
      <ul>
        <li>Total tasks : {totalNum} </li>
        <li>Completed task : {totalCompletedNum} </li>
        <li>InCompleted task : {totalInCompletedNum} </li>
        <li>Percentage completion : {Math.round(percentageCompleted)} </li>
      </ul>
    </div>
  );
}
