import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { link } from "fs";

test("renders Add Task buttons", () => {
  const { getAllByText } = render(<App />);
  const taskButtonElement = getAllByText(/Add task/i);
  expect(taskButtonElement).toHaveLength(5);
});

test("renders links", () => {
  const { getAllByRole } = render(<App />);
  //console.log(wrapper.getAllByRole(/Link/i));
  const linkElement = getAllByRole(/Link/i);
  expect(linkElement).toHaveLength(6);
});
