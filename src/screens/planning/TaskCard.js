import React, { useState } from "react";
import { useDrag } from "react-dnd";

export default function({ context, title, isDragging }) {
  const [{ opacity }, dragRef] = useDrag({
    item: { name: title, type: "TODO" },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.8 : 1
    })
  });

  return (
    <div
      ref={dragRef}
      css={`
        background: white;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        padding: 16px;
        width: 300px;
        border-radius: 4px;
      `}
    >
      <div
        css={`
          text-transform: uppercase;
          font-weight: 500;
          color: #4e4d4d;
          font-size: 12px;
          padding-bottom: 2px;
        `}
      >
        {context}
      </div>
      <div
        css={`
          font-size: 16px;
        `}
      >
        {title}
      </div>
    </div>
  );
}
