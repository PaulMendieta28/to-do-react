import React, { useState, useEffect } from "react";
import "./App.scss";
import Form from "./component/task-form";
import TaskList from "./component/task-list";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todolist, settodolist] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("todolist"));
    if (list) {
      settodolist(list);
    }
  }, []);

  const addTask = (value) => {
    const newValue = {
      id: uuidv4(),
      text: value,
      complete: false,
    };
    const list = [...todolist, newValue];
    settodolist(list)
    localStorage.setItem("todolist", JSON.stringify(list));
  };

  const toggleComplete = (id) => {
    const newList = [...todolist]
    const index = newList.findIndex((todo) => todo.id === id)
    const update = newList[index];
    newList.splice(index, 1, { ...update, complete: !update.complete });
    settodolist(newList)
    localStorage.setItem("todolist", JSON.stringify(newList));
    
  }

  const deleteTask = (id) => {
    let deletetodolist = todolist.filter((todo) => todo.id !== id);
    settodolist(deletetodolist);
    localStorage.setItem("todolist", JSON.stringify(deletetodolist));
  };

  return (
    <div className="Home">
      <div className="Home-container">
        <h1 className="Home-title">To do App</h1>
        <Form addTask={addTask} />
        <TaskList
          list={todolist}
          setList={settodolist}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>  
    </div>
  );
}

export default App;

