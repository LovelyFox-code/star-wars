import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import AnimationSwitcher from "./AnimationSwitcher";

test("AnimationSwitcher should display 'show the text' when animation is selected", () => {
  //arrange
  render(<AnimationSwitcher isAnimated={true} />);
  //act
  const buttonElement = screen.getByText(/Show the text/i);
  //assert
  expect(buttonElement).toBeInTheDocument();
});
test("AnimationSwitcher should display 'animate' when the text is selected", () => {
  //arrange
  render(<AnimationSwitcher isAnimated={false} />);
  //act
  const buttonElement = screen.getByText(/Animate/i);
  //assert
  expect(buttonElement).toBeInTheDocument();
});

test("AnimationSwitcher should toggle between animation and text", () => {
  //arrange
  const Parent = () => {
    const [isAnimated, setIsAnimated] = useState(true);
    return (
      <AnimationSwitcher
        isAnimated={isAnimated}
        setIsAnimated={setIsAnimated}
      />
    );
  };
  render(<Parent />);
  //act
  const buttonElement = screen.getByText(/Show the text/i);
  fireEvent.click(buttonElement);
  const changedButtonElement = screen.getByText(/Animate/i);
  //assert
  expect(changedButtonElement).toBeInTheDocument();
});
