import React from "react";
import "./Task.css";

function Task(props) {
  // props = { texte : 'jskladjsal' }
  // const texte = props.texte;
  const { texte, index } = props;
  /*
  const handleClickRemove = () => {
    removeTask(index);
  };

  const handleClickUp = () => {
    upTask(index);
  };

  const handleClickDown = () => {
    downTask(index);
  };
*/
  return (
    <div className="task">
      <div>{texte}</div>
      <div className="taskButton">
        <button>Remove task</button>
        <button>Up</button>
        <button>Down</button>
      </div>
    </div>
  );
}

export { Task };
