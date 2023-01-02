import React from 'react';
import {graphql, Link} from "gatsby";
import {PostList} from "../components/PostPreview";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader/PageHeader";
import SEO from "../components/utilities/seo";
import Layout from "../components/layout/Layout";
import {getTagLink} from "../components/utilities";
import {BiArrowBack} from "react-icons/all";

const TagsPage = ({pageContext, data}: any) => {

  const {tag} = pageContext;
  const {nodes, totalCount} = data.allMdx;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return <Layout>
    <SEO title={tagHeader}/>
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

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      filter: { frontmatter: { tags: { in: [$tag] } }, fileAbsolutePath: {regex: "/posts/"} }
    ) {
      totalCount
      nodes {
        ...blogFields
      }
    }
  }
`;

export default TagsPage;
