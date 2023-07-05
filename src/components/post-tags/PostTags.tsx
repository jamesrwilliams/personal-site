import React, {FC} from "react";
import {BsTagsFill} from "react-icons/bs";
import {Link} from "../link/Link";
import {PostTagsWrapper} from "./PostTags.styled";
import {getTagLink} from "../../lib/getTagLink";
import {toKebabCase} from "../../lib/toKebabCase";

export const PostTags: FC<{ tags: string[] }> = ({ tags }) => {

  if(!tags) {
    return <></>;
  }

  return (
    <PostTagsWrapper>
      <span style={{ marginRight: '.5rem', transform: 'translateY(2px)' }}><BsTagsFill /></span>
      { tags.map((tag: string) =>
        <Link key={tag} to={getTagLink(tag)}>#{ toKebabCase(tag) }</Link>
      )}
    </PostTagsWrapper>
  )
}
