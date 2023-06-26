import React from 'react';
import {graphql, Link} from "gatsby";
import { PageHeader, Container, Layout, PostList } from "../components";
import {BiArrowBack} from "react-icons/bi";
import {Meta} from "../components/utilities/Meta";
import {BlogFields} from "./BlogPostTemplate";
import {getTagLink} from "../lib/getTagLink";

const generateTagHeader = (tagName: string, tagCount: number) => {
  return `${tagCount} post${tagCount === 1 ? "" : "s"} tagged with "${tagName}"`;
}

const TagsPage = ({pageContext, data}: PageQuery) => {

  const {tag} = pageContext;
  const {nodes, totalCount} = data.allMdx;
  const tagHeader = generateTagHeader(tag, totalCount);

  return <Layout>
    <main>
      <PageHeader title={tagHeader}>
        <br/>
        <Link to={getTagLink()}>
          <BiArrowBack /> View all tags
        </Link>
      </PageHeader>
      <Container>
        <PostList posts={nodes}/>
      </Container>
    </main>
  </Layout>
}

export const Head = ({pageContext, data}: PageQuery) => {
  const {tag} = pageContext;
  const {totalCount} = data.allMdx;
  const tagHeader = generateTagHeader(tag, totalCount);
  return <Meta title={tagHeader} />;
}

interface PageQuery {
  pageContext: {
    tag: string;
  }
  data: {
    allMdx: {
      totalCount: number;
      nodes: BlogFields[];
    }
  }
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      filter: {frontmatter: {tags: {in: [$tag]}}, internal: {contentFilePath: {regex: "/posts/"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      totalCount
      nodes {
        ...blogFields
      }
    }
  }
`;

export default TagsPage;
