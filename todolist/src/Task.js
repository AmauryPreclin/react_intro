import React from "react";
import "./Task.css";

function Task(props) {
  // props = { texte : 'jskladjsal' }
  // const texte = props.texte;
  const { texte, removeTask, index } = props;

  const handleClick = () => {
    removeTask(index);
  };

  return (
    <div className="task">
      <div>{texte}</div>
      <button className="taskButton" onClick={handleClick}>
        Remove task
      </button>
    </div>
  );
}

export { Task };
