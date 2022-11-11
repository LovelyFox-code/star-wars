import { render, screen } from "@testing-library/react";
import ListItems from "./ListItems";

test("if renders items contains Luke", () => {
  //arrange
  const filmDetails = [{ name: "Luke" }, { name: "Han Solo" }];
  render(<ListItems filmDetails={filmDetails} />);
  //act
  const listItems = screen.getAllByRole("listitem");

  //assert
  expect(listItems).toBeInTheDocument(/luke/i);
});
