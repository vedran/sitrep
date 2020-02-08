import React, { useState, useEffect } from "react";
import TaskList from "./screens/planning/TaskList";
import { createGlobalStyle } from "styled-components";

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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  `;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TaskList tasks={TODOS} />
    </div>
  );
}

export default App;
