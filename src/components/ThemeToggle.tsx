import React from "react";
import ThemeContext from "../context/ThemeContext";
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/all";
import styled from "styled-components";
import {mediaQuery} from "../theme/variables";

const ThemeToggleButton = styled.button`
  background: none;
  font-size: 18px;
  color: #fff;
  transform: translateY(0px);
  border-radius: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  margin-left: 2rem;
  padding-left: 1.5rem;

  @media screen and (${mediaQuery.minMd}) {
    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      height: 100%;
      width: 1px;
      background: #444;
    }
  }
`;

export const ThemeToggle: React.FC = () => {
  return <ThemeContext.Consumer>
    {({darkModeActive, toggleDarkMode}) => (
      <>
        <ThemeToggleButton type="button" onClick={() => toggleDarkMode()}>
          { darkModeActive ? <MdOutlineLightMode />: <MdOutlineDarkMode /> }
        </ThemeToggleButton>
      </>
    )}
  </ThemeContext.Consumer>
}
