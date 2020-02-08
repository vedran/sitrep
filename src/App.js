import React from "react";
import { createGlobalStyle } from "styled-components";
import TaskList from "./screens/planning/TaskList";
import Calendar from "./screens/planning/Calendar";

import TODOS from "./todos";
import BLOCKS from "./blocks";

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
        <Calendar blocks={BLOCKS} />
      </div>
    </div>
  );
}

export default App;
