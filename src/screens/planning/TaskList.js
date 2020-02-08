import React from "react";
import TaskCard from "./TaskCard";

export default function({ tasks }) {
  return (
    <div
      css={`
        overflow: scroll;
        height: 95vh;
      `}
    >
      {tasks.map(({ context, title }, i) => (
        <div
          key={i}
          css={`
            margin: 8px;
          `}
        >
          <TaskCard context={context} title={title} />
        </div>
      ))}
    </div>
  );
}
