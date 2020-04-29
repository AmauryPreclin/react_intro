import React from "react";
import "./Task.css";

function Task(props) {
  const content = props.texte;

  return (
    <>
      <div>{content}</div>
      <button>Remove task</button>
    </>
  );
}

export default Task;
