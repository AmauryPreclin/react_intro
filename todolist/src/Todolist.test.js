import React from "react";
import { render } from "@testing-library/react";
import { Todolist } from "./Todolist";

test("render button", () => {
  const { getAllByRole } = render(<Todolist />);
  const taskButton = getAllByRole(/button/i);
  expect(taskButton).toHaveLength(1);
});
