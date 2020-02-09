import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { addTodoToBlock } from "../../slices/blocks";

export default function({
  accept,
  lastDroppedItem,
  id,
  startTime,
  endTime,
  hour
}) {
  const dispatch = useDispatch();

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ["TODO"],
    drop: item => {
      dispatch(addTodoToBlock({ blockId: id, todoId: item.id }));
    },
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
