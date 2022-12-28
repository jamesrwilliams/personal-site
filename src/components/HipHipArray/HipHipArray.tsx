import styled from "styled-components";
import React from "react";

const HipHipArrayStyled = styled.code`
  align-self: center;
  opacity: .5;
  margin-left: 1rem;
`;

export const HipHipArray: React.FC = () => (
  <HipHipArrayStyled role="img" aria-label="Hip Hip Array..." title="Hip Hip Array...">
    [&apos;hip&apos;,&apos;hip&apos;]
  </HipHipArrayStyled>
);
