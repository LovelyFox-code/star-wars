import React from "react";
import Button from "../Button/Button";

export default function AnimationSwitcher({ isAnimated, setIsAnimated }) {
  // Toggle text crawl animation
  const toggle = () => {
    setIsAnimated(!isAnimated);
  };
  return (
    <>
      {isAnimated ? (
        <Button onClick={() => toggle()}>
          <h4>Show the text</h4>
        </Button>
      ) : (
        <Button onClick={() => toggle()}>
          <h4>Animate</h4>
        </Button>
      )}
    </>
  );
}
