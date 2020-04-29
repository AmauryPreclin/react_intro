import React from "react";

function Todolist(props) {
  const { title } = props;
  const [tasks, setTasks] = React.useState([]);

  const renderTasks = () => {
    return tasks.map((task) => <div>{task}</div>);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = event.target.elements.addTask.value;
    setTasks([...tasks, task]);
    console.log(tasks);
  };

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="addTask">Task:</label>
          <input id="addTask"></input>
        </div>
        <button type="submit">{`Add task ${title}`}</button>
      </form>
      <br />
      <div>{renderTasks()}</div>
    </div>
  );
}

export default Todolist;
