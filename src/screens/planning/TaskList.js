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
          css={`
            margin: 8px;
          `}
        >
          <TaskCard key={i} context={context} title={title} />
        </div>
      ))}
    </div>
  );
}
