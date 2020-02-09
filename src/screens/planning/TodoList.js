import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

export default function() {
  const todoIds = useSelector(state => state.todos.allIds);
  return (
    <div
      css={`
        overflow: scroll;
        height: 95vh;
      `}
    >
      {todoIds.map(id => (
        <div
          key={id}
          css={`
            margin: 8px;
          `}
        >
          <TodoCard id={id} />
        </div>
      ))}
    </div>
  );
}
