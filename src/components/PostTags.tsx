import Link from "./Link/Link";
import {getTagLink} from "./utilities";
import React from "react";
import { BsTagsFill } from "react-icons/bs";
import _ from "lodash";
import styled from "styled-components";

const PostTagsWrapper = styled.span`
  a,
  a:link {
    color: ${({theme}) => theme.textColor};
    margin-right: 1rem;
  }

  a:hover {
    color: ${({theme}) => theme.headingColor};
  }

  span {
    margin-right: 1rem;
    display: inline-block;
    transform: translateY(2px);
  }
`;


// @ts-ignore
export const PostTags = ({ tags }) => {

  if(!tags) return <></>;

  return (
    <PostTagsWrapper>
      <span style={{ marginRight: '.5rem', transform: 'translateY(2px)' }}><BsTagsFill /></span>
      { tags.map((tag: string) =>
        <><Link key={tag} to={getTagLink(tag)}>#{ _.kebabCase(tag) }</Link></>
      )}
    </PostTagsWrapper>
  )
}
