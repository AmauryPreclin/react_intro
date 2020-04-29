import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  return (
    <div>
      <Todolist title="Monday" />
      <Todolist title="Tusday" />
      <Todolist title="Wednesday" />
      <Todolist title="Thursday" />
      <Todolist title="Friday" />
    </div>
  );
}

export default App;
