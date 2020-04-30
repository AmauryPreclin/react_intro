import React from "react";
import "./App.css";
import { Todolist } from "./Todolist.js";
import { WeekDate } from "./WeekDate.js";

function App() {
  return (
    <>
      <WeekDate />
      <div id="app-container">
        <Todolist title="Monday" />
        <Todolist title="Tuesday" />
        <Todolist title="Wednesday" />
        <Todolist title="Thursday" />
        <Todolist title="Friday" />
      </div>
    </>
  );
}

export default App;
