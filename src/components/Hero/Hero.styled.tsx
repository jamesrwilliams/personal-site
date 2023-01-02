import styled from "styled-components";
import {mediaQuery, textGradient} from "../../theme/variables";
import {OutboundLink} from "gatsby-plugin-google-analytics";

export const HeroWrapper = styled.div`
  position: relative;
  font-weight: 200;
  height: calc(100vh - 85px);
  display: flex;
  color: ${({theme}) => theme.headingColor};
  align-items: center;
  background: ${({theme}) => theme.hero.background};

  @media screen and ${mediaQuery.minMd} {
    height: calc(100vh - 55px);
  }

  .lead,
  .gradient {
    font-size: 25px;
    font-weight: 400;

    @media screen and ${mediaQuery.minMd} {
      font-size: 45px;
    }
  }

  .lead {
    margin-right: .7ch;
    font-weight: 200;
    transition: all 1s ease;
    margin-bottom: 1rem;
  }

  .intro {
    font-size: 16px;

    @media screen and ${mediaQuery.minMd} {
      max-width: 650px;
      font-size: 18px;
      padding-bottom: 2rem;
    }
  }

  .gradient {
    display: block;
    margin-top: 0;
    text-decoration: none;
    margin-bottom: 2rem;
    ${textGradient}
  }
`;

export const StyledEmployerLink = styled(OutboundLink)`
  color: inherit;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: .1ch;
    right: .1ch;
    bottom: 0;
    height: 2px;
    background: linear-gradient(to right, #fff0, #fff0, #0ba7fd, #01d8d1);
    background-size: 300% 200%;
    transition: all 1s ease;
  }

  &:hover:after {
    background-position: 100% 0;
  }
`;
