// Vendor
import React from "react";

// Internal
import { AddTask } from "./AddTask.js";
import { Task } from "./Task.js";

const Todolist = (props) => {
  const { title } = props;

  // Hooks
  const [tasks, setTasks] = React.useState([]);

  // Handlers
  const addTask = (taskName) => {
    setTasks([...tasks, taskName]);
  };

  const removeTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  // Markup
  const renderTasks = () => {
    const element = tasks.map((task, index) => (
      <Task texte={task} index={index} removeTask={removeTask} key={index} />
    ));
    return element;
  };

  return (
    <div>
      <h2>{title}</h2>
      <AddTask addTask={addTask} title={title} />
      <br />
      {renderTasks()}
    </div>
  );
};

export { Todolist };
