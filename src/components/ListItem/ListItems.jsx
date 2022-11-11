import React from "react";

export default function ListItem({ filmDetails }) {
  return (
    <>
      <ul>
        {filmDetails?.map((entry) => (
          <li key={entry.name}>{entry.name}</li>
        ))}
      </ul>
    </>
  );
}
