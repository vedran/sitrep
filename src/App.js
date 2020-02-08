import React from "react";
import { createGlobalStyle } from "styled-components";
import TaskList from "./screens/planning/TaskList";
import Calendar from "./screens/planning/Calendar";

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
  },
  {
    context: "sitrep",
    title: "Setup firebase project"
  },
  {
    context: "sitrep",
    title: "Create client side firebase auth"
  },
  {
    context: "sitrep",
    title: "Create firestore database for TODOs by user"
  },
  {
    context: "sitrep",
    title: "Create cloud function for getting calendar events"
  },
  {
    context: "sitrep",
    title: "Frontend render existing meeting blocks in calendar"
  },
  {
    context: "sitrep",
    title: "Setup google calendar auth"
  },
  {
    context: "sitrep",
    title: "Pull events from Noom calendar"
  },
  {
    context: "sitrep",
    title: "Sync redux actions with firestore"
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
      <div
        css={`
          display: flex;
        `}
      >
        <TaskList tasks={TODOS} />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
