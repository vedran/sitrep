import React from "react";
import { css } from "styled-components";
import TaskCard from "./TaskCard";

export default function({ tasks }) {
  return tasks.map(({ context, title }, i) => (
    <div
      css={css`
        margin: 8px;
      `}
    >
      <TaskCard key={i} context={context} title={title} />
    </div>
  ));
}
