import styled from "styled-components";

export const PostListStyled = styled.div``;

export const PostListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;

  &:hover h3 {
    text-decoration: underline;
  }

  h3 {
    margin-bottom: 0;
    font-size: 1.25rem;
    word-break: break-word;
  }

  span {
    font-size: .875rem;
    color: #475569;
    font-variant: tabular-nums;
  }
`;

export const PostListOrderedList = styled.ol`
  padding: 0;
  margin: 0;
`;
