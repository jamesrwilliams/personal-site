import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import PageHeader from '../components/page-header/page-header';
import SEO from '../components/seo'
import JSONLD from '../components/json-ld/json-ld'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const postDate = new Date(frontmatter.date).toISOString();

  return (
    <Layout>
      <SEO title={frontmatter.title} description={markdownRemark.excerpt} published_time={postDate} />
      <JSONLD data={data}/>
      <PageHeader title={frontmatter.title} keyline={false} post={frontmatter} />
      <article
        className="container container-content pt-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      wordCount {
        words
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
