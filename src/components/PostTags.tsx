import Link from "./Link/Link";
import {getTagLink} from "./utilities";
import React, { FC } from "react";
import { BsTagsFill } from "react-icons/bs";
import _ from "lodash";
import styled from "styled-components";

const PostTagsWrapper = styled.span`
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

export const PostTags: FC<{ tags: string[] }> = ({ tags }) => {

  if(!tags) {
    return <></>;
  }

  return (
    <PostTagsWrapper>
      <span style={{ marginRight: '.5rem', transform: 'translateY(2px)' }}><BsTagsFill /></span>
      { tags.map((tag: string) =>
        <Link key={tag} to={getTagLink(tag)}>#{ _.kebabCase(tag) }</Link>
      )}
    </PostTagsWrapper>
  )
}
