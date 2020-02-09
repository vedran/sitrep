import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { DndProvider } from "react-dnd";
import { useDispatch } from "react-redux";
import Backend from "react-dnd-html5-backend";

import TodoList from "./screens/planning/TodoList";
import Calendar from "./screens/planning/Calendar";

import { loadTodos } from "./slices/todos";
import { loadBlocks } from "./slices/blocks";

import TODOS from "./todos";
import BLOCKS from "./blocks";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  `;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos(TODOS));
    dispatch(loadBlocks(BLOCKS));
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <DndProvider backend={Backend}>
        <div
          css={`
            display: flex;
          `}
        >
          <TodoList />
          <Calendar />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
