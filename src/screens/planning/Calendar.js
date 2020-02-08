import React from "react";

const ROW_HEIGHT = 60;

export default function() {
  const hours = [
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ];

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
        {hours.map(hour => (
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
        {hours.map(hour => (
          <div
            key={hour}
            css={`
              border: 1px solid #dadce0;
              border-left: none;
              border-top: ${hour === hours[0] ? "1px solid #dadce0;" : "none"};
              flex: 1;
              height: ${ROW_HEIGHT}px;
              box-sizing: border-box;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            `}
          ></div>
        ))}
      </div>
    </div>
  );
}
