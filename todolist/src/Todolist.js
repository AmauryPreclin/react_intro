import React from "react";
import Task from "./Task.js";

function Todolist(props) {
  const { title } = props;
  const [tasks, setTasks] = React.useState([]);
  const [taskName, setTaskName] = React.useState("");

  const renderTasks = () => {
    const element = tasks.map((task) => <Task children={task}></Task>);
    return element;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.addTask.value === "") {
      alert("You entered an empty string");
    } else {
      //const task = event.target.elements.addTask.value;
      setTasks([...tasks, taskName]);
      setTaskName("");
    }
  };

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="addTask">Task:</label>
          <input value={taskName} onChange={handleChange} id="addTask"></input>
        </div>
        <button type="submit">{`Add task ${title}`}</button>
      </form>
      <br />
      <div>{renderTasks()}</div>
    </div>
  );
}

export default Todolist;
