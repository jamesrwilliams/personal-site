import React from "react";
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 840px;
    margin: 0 1rem;
    padding: 0 1rem;
    transition: all 1s ease;

    @media screen and (min-width: 700px) {
      margin: 0 auto;
      padding: 0 2rem;
    }
`;
