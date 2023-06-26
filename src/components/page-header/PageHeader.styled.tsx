import styled from "styled-components";
import {textGradient} from "../../theme/variables";

export const PageWrapper = styled.aside`
  padding: 2rem 0 1rem;
  color: var(--typography-primary);
  position: relative;
  margin-bottom: 0;
  background: var(--brand-darker);

  a {
    text-decoration: underline;
  }

  @media screen and (min-width: 700px) {
    padding: 8rem 0 2.5rem;
  }

  h1 {
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    line-height: 1.4;
    ${textGradient}

    @media screen and (min-width: 700px) {
      font-size: 38px;
    }
  }
`;

export const PageMetaWrapper = styled.div`
  border-radius: 3px;
  margin-top: 5px;
  display: inline-block;
  opacity: .5;
  color: var(--typography-primary);
`;

