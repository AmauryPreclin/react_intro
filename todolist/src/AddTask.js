import React from "react";

const AddTask = (props) => {
  const { addTask, title } = props;

  // Hooks
  const [taskName, setTaskName] = React.useState("");

  // Handlers
  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleClick = () => {
    if (taskName) addTask(taskName);
    setTaskName("");
  };

  return (
    <div>
      <div>
        <span>Task:</span>
        <input value={taskName} onChange={handleChange}></input>
      </div>
      <button onClick={handleClick} type="button">{`Add task ${title}`}</button>
    </div>
  );
};

export { AddTask };
