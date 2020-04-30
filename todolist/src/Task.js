import React from "react";
import "./Task.css";

function Task(props) {
  // props = { texte : 'jskladjsal' }
  // const texte = props.texte;
  const { texte, removeTask, upTask, downTask, index } = props;

  const handleClickRemove = () => {
    removeTask(index);
  };

  const handleClickUp = () => {
    upTask(index);
  };

  const handleClickDown = () => {
    downTask(index);
  };

  return (
    <div className="task">
      <div>{texte}</div>
      <button className="taskButton" onClick={handleClickRemove}>
        Remove task
      </button>
      <button className="taskButton" onClick={handleClickUp}>
        Up
      </button>
      <button className="taskButton" onClick={handleClickDown}>
        Down
      </button>
    </div>
  );
}

export { Task };
