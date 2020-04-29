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

  // Markup
  const renderTasks = () => {
    const element = tasks.map((task, index) => (
      <Task texte={task} key={index} />
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
