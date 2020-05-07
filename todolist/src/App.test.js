import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Add Task buttons", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/Add task/i);
  //expect(linkElement).toBeInTheDocument();
  linkElement.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});
