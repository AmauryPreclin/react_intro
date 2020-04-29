import React from "react";
import Task from "./Task.js";
import ListTasks from "./ListTasks.js";

function Todolist(props) {
  const { title } = props;
  const [taskName, setTaskName] = React.useState("");
  const listTasksRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.addTask.value === "") {
      alert("You entered an empty string");
    } else {
      console.log(taskName);
      listTasksRef.current.updateTasks(taskName);
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
      <ListTasks ref={listTasksRef} />
    </div>
  );
}

export default Todolist;
