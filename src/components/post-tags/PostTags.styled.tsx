import styled from "styled-components";

export const PostTagsWrapper = styled.span`
  display: inline-block;
  margin: .5rem 0;

  a,
  a:link {
    color: var(--typography-secondary);
    margin-right: 1rem;
  }

  a:hover {
    color: var(--typography-primary);
  }

  span {
    margin-right: 1rem;
    display: inline-block;
    transform: translateY(2px);
  }
`;
