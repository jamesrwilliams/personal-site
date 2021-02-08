import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageHeader from '../components/PageHeader/PageHeader'
import SEO from '../components/utilities/seo'
import JSONLD from '../components/utilities/json-ld'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const postDate = new Date(frontmatter.date).toISOString();

  return (
    <Layout>
      <SEO title={frontmatter.title} description={markdownRemark.excerpt} published_time={postDate} path={frontmatter.slug} />
      <JSONLD data={data} />
      <PageHeader title={frontmatter.title} post={frontmatter} />
      <main className={'container'}>
        <article
          className="prose prose-lg py-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
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
        draft
      }
    }
  }
`;
