import React from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';

const DarkModeButton = styled.button`
  background: none;
  border: 1px solid #fff5;
  color: #fff;
  margin-left: 3rem;
  padding: 3px 1rem;
  border-radius: 5px;

  span.icon {
    padding-right: 1rem;
  }
`;

export const DarkModeToggle = () => (
  <ThemeContext.Consumer>
    {(theme) => (
      <DarkModeButton type="button" onClick={() => theme.toggleDark()}>
        <span>Use { theme.dark ? 'light' : 'dark' } mode</span>
      </DarkModeButton>
    )}
  </ThemeContext.Consumer>
);
