import React from "react";
import {PostListItem, PostListOrderedList} from "./PostList.styled";
import {Link} from "gatsby";
import {BlogFields} from "../../templates/BlogPostTemplate";

export interface PostListProps {
  posts: BlogFields[]
}


export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return <PostListOrderedList>
    { posts.map((post) => (
      <PostListItem>
        <Link to={'/posts/' + post.fields.slug}>
          <h3>{post.frontmatter.title}</h3>
          <span>{ post.frontmatter.dateReadable }</span>
        </Link>
      </PostListItem>
    ))}
  </PostListOrderedList>
}
