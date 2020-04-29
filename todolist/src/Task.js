import React from "react";
import "./Task.css";

function Task(props) {
  // props = { texte : 'jskladjsal' }
  // const texte = props.texte;
  const { texte } = props;

  return (
    <>
      <div>{texte}</div>
      <button>Remove task</button>
    </>
  );
}

export { Task };
