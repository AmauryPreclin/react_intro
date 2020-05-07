// Vendor
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import gql from "graphql-tag";

// Internal
import { AddTask } from "./AddTask.js";
import { Task } from "./Task.js";
import "./Todolist.css";

const Todolist = (props) => {
  const { title, className, setTasks, tasks } = props;
  let { day } = useParams();
  if (title) {
    day = title.toLowerCase();
  }
  const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);

  // Hooks
  //const [tasks, setTasks] = React.useState([]);

  // Handlers
  const addTask = (taskName, id) => {
    //const len = tasks.length + 1;
    const task = { id: id, text: taskName };
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const element = document.getElementById(index + day);
    //element.style.animationName = "remove-task";
    //element.style.animationDelay = "2s";
    element.className = element.className + " remove-task";
    setTimeout(removeTaskCompletely, 2000);
  };

  const removeTaskCompletely = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks([...newTasks]);
  };

  const upTask = (index) => {
    if (index === 0) return;
    [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
    const newTasks = [...tasks];
    setTasks([...newTasks]);
  };

  const downTask = (index) => {
    if (index === tasks.length - 1) return;
    [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    const newTasks = [...tasks];
    setTasks([...newTasks]);
  };

  // Markup
  const renderTasks = () => {
    const element = tasks.map((task, index) => (
      <Task
        texte={task.text}
        id={index + day}
        index={index}
        removeTask={removeTask}
        upTask={upTask}
        downTask={downTask}
        key={index}
      />
    ));
    return element;
  };

  return (
    <div className={`todolist ${className}`}>
      <h2>{dayCapitalized}</h2>
      <AddTask addTask={addTask} title={day} />
      <br />
      {renderTasks()}
    </div>
  );
};

export { Todolist };
