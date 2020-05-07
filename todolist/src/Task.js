import React from "react";
import "./Task.css";

function Task(props) {
  // props = { texte : 'jskladjsal' }
  // const texte = props.texte;
  const { texte, removeTask, upTask, downTask, index, id } = props;

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
    <div id={id} className="task">
      <div>{texte}</div>
      <div className="taskButton">
        <button onClick={handleClickRemove}>Remove task</button>
        <button onClick={handleClickUp}>Up</button>
        <button onClick={handleClickDown}>Down</button>
      </div>
    </div>
  );
}

export { Task };
