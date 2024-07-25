import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
  // To store the taskList in local storage, we use 
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState([]);

  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(taskList))
  },[taskList])
  return (
    <div className="">
      <Header/>
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
