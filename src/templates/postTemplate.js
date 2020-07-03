import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageHeader from '../components/page-header/page-header';
import PostMeta from '../components/post-meta/post-meta';
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PageHeader title={frontmatter.title} keyline={false} />
      <PostMeta meta={frontmatter} />
      <div
        className="container content-container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        slug
        title
        draft
      }
    }
  }
`;
