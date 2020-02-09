import React from "react";
import { useSelector } from "react-redux";

import Block from "./Block";
import HOURS from "./hours";

const ROW_HEIGHT = 60;

export default function() {
  const blocks = useSelector(state => state.blocks);

  return (
    <div
      css={`
        width: 300px;
        margin-left: 64px;
        margin-top: 8px;
        padding: 16px;
        display: flex;
        overflow: scroll;
        height: 90vh;
      `}
    >
      <div>
        {HOURS.map(hour => (
          <div
            key={hour}
            css={`
              font-size: 12px;
              color: grey;
              display: flex;
              height: ${ROW_HEIGHT}px;
            `}
          >
            <div
              css={`
                margin-right: 8px;
              `}
            >
              {hour < 10 ? `0${hour}` : hour}:00
            </div>
          </div>
        ))}
      </div>
      <div
        css={`
          margin-top: 8px;
          flex: 1;
        `}
      >
        {HOURS.map(hour => (
          <div
            key={hour}
            css={`
              border: 1px solid #dadce0;
              border-left: none;
              border-top: ${hour === HOURS[0] ? "1px solid #dadce0;" : "none"};
              height: ${ROW_HEIGHT}px;
              box-sizing: border-box;
              position: relative;
            `}
          >
            {blocks.allIds
              .filter(
                id =>
                  blocks.byId[id].start_time >= hour &&
                  blocks.byId[id].start_time < hour + 1
              )
              .map(id => (
                <Block
                  key={id}
                  hour={hour}
                  id={id}
                  startTime={blocks.byId[id].start_time}
                  endTime={blocks.byId[id].end_time}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
