import React from "react";
import { styled } from "styled-components";

const Card = styled.div`
  background: white;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 16;
`;

export default function({ context, title }) {
  return (
    <Card>
      {context}: {title}
    </Card>
  );
}