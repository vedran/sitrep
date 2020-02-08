import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { styled } from "styled-components";

const TODOS = [
  {
    context: "sitrep",
    title: "Frontend render list of TODOs. Simple cards with Styled components."
  },
  {
    context: "sitrep",
    title: "Frontend render simple blank calendar layout"
  },
  {
    context: "sitrep",
    title: "Create hardcoded time buckets to start"
  },
  {
    context: "sitrep",
    title: "Frontend render time block blockets"
  },
  {
    context: "sitrep",
    title: "Frontend drag and drop skeleton"
  },
  {
    context: "sitrep",
    title: "Frontend redux action for drag and drop with redux toolkit"
  },
  {
    context: "sitrep",
    title: "Frontend UX for checking off items"
  },
  {
    context: "sitrep",
    title: "Frontend page for editing raw TODOs"
  },
  {
    context: "sitrep",
    title: "Redux actions for checking off items"
  }
];

function App() {
  return (
    <div>
      {TODOS.map(({ context, title }, i) => (
        <div
          css={css`
            color: red;
          `}
        >
          <TaskCard key={i} context={context} title={title} />
        </div>
      ))}
    </div>
  );
}

export default App;
