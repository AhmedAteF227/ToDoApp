import { useRecoilState } from "recoil";
import "./App.css";
import CreateToDoItem from "./components/CreateToDoItem";
import { filteredToDoList } from "./atoms/atom-todolist";
import DisplayToDoItems from "./components/DisplayToDoItems";
import ToDoListFilter from "./components/ToDoListFilter";
import ToDoListStats from "./components/ToDoListStats";

function App() {
  const [toDoList, setToDoList] = useRecoilState(filteredToDoList);
  return (
    <div className="toDoApp">
      <div className="App">
        <h1>To Do App</h1>
        <ToDoListStats />
        <CreateToDoItem />

        {toDoList.map((item) => {
          return <DisplayToDoItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
