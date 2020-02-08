import React from "react";
import HOURS from "./hours";

const ROW_HEIGHT = 60;

export default function({ blocks }) {
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
            {blocks.map(block => {
              if (block.start_time >= hour && block.start_time < hour + 1) {
                return (
                  <div
                    css={`
                      background: red;
                      position: absolute;
                      top: ${(block.start_time - hour) * 100}%;
                      right: 0;
                      left: 0;
                      bottom: ${(hour + 1 - block.end_time) * 100}%;
                      z-index: 1;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    `}
                    key={block.start_time}
                  >
                    {block.start_time} - {block.end_time}
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
