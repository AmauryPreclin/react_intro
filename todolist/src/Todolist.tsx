// Vendor
import React from "react";
import { useParams } from "react-router-dom";

// Internal
import { AddTask } from "./AddTask.tsx";
import { Task } from "./Task.tsx";
import { CtxTodolist } from "./App.tsx";
import "./Todolist.css";

const Todolist = (props, context) => {
  const { title, className, setTasks, tasks } = props;
  let { day } = useParams();
  //const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);
  if (title) {
    day = title.toLowerCase();
  }
  const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);
  console.log(CtxTodolist.Consumer);

  // Hooks
  //const [tasks, setTasks] = React.useState([]);

  // Handlers
  const addTask = (taskName: string) => {
    setTasks([...tasks, taskName]);
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks([...newTasks]);
  };

  const upTask = (index: number) => {
    if (index === 0) return;
    [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
    const newTasks = [...tasks];
    setTasks([...newTasks]);
  };

  const downTask = (index: number) => {
    if (index === tasks.length - 1) return;
    [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    const newTasks = [...tasks];
    setTasks([...newTasks]);
  };

  // Markup
  const renderTasks = () => {
    const element = tasks.map((task: string, index: number) => (
      <Task
        texte={task}
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
