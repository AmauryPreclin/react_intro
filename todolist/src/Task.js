import React from "react";

function Task(props) {
  const content = props.children;

  return <div>{content}</div>;
}

export default Task;
