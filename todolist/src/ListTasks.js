import React from "react";
import Task from "./Task.js";

const ListTasks = React.forwardRef((props, ref) => {
  const [tasks, setTasks] = React.useState([]);

  React.useImperativeHandle(ref, () => ({
    updateTasks(newTask) {
      setTasks([...tasks, newTask]);
    },
  }));

  const renderTasks = () => {
    const element = tasks.map((task, index) => (
      <Task texte={task} key={index} />
    ));
    return element;
  };

  return <div>{renderTasks()}</div>;
  //return <RenderTasks />;
});

export default ListTasks;
