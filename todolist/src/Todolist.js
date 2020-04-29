import React from "react";

function Todolist(props) {
  const { title } = props;
  const [tasks, setTasks] = React.useState([]);

  const renderTasks = () => {
    return tasks.map((task) => <div>{task}</div>);
  };

  const handleClick = () => {
    setTasks([...tasks, "tasks"]);
    console.log(tasks);
  };

  return (
    <div>
      <button onClick={handleClick}>{`Add task ${title}`}</button>
      <h2>{title}</h2>
      <div>{renderTasks()}</div>
    </div>
  );
}

export default Todolist;
