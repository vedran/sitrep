import React from "react";
import { useDrop } from "react-dnd";

export default function({
  accept,
  lastDroppedItem,
  onDrop,
  startTime,
  endTime,
  hour
}) {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ["TODO"],
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  let backgroundColor = "red";

  if (isOver && canDrop) {
    backgroundColor = "green";
  } else if (canDrop) {
    backgroundColor = "blue";
  }

  return (
    <div
      ref={dropRef}
      css={`
        background: ${backgroundColor};
        position: absolute;
        top: ${(startTime - hour) * 100}%;
        right: 0;
        left: 0;
        bottom: ${(hour + 1 - endTime) * 100}%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {startTime} - {endTime}
    </div>
  );
}
