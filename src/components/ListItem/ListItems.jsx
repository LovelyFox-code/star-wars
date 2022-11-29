import React, { useState } from "react";

export default function ListItem({ filmDetails }) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const handleKeyPress = () => {
    setQuery(input);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <input value={input} onChange={(event) => handleChange(event)}></input>
      <button onClick={() => handleKeyPress()}>Click me!</button>
      <ul>
        {filmDetails
          .filter((entry) => entry.name.includes(query))
          .map((entry) => (
            <li key={entry.name}>{entry.name}</li>
          ))}
      </ul>
    </>
  );
}
