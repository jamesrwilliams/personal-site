import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import {Hero, Layout, PostLink} from '../components';

import SEO from '../components/utilities/seo';
import Container from '../components/Container';

const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-column-gap: 1%;
`;

const IndexPage = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allMdx(limit: 6, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          excerpt(pruneLength: 150)
          slug
          frontmatter {
            date
            date_readable: date(formatString: "DD/MM/YYYY")
            title
            slug
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title=""
        description={"I'm James, a development engineer from Canada. I enjoy building delightfully fast, and engaging digital projects."}
      />
      <Hero />
      <section className="recent-posts">
        <Container>
          <h2>Recent posts</h2>
          <PostGrid>
            { posts.nodes.map((_post) => (
              <>
                <PostLink key={_post.slug} slug={`/posts/${_post.slug}`} post={_post.frontmatter} />
              </>
            ))}
          </PostGrid>
          <p style={{ textAlign: 'center', textDecoration: 'none' }}><Link to="/posts/">View all</Link></p>
        </Container>
      </section>
    </Layout>
  );
};

export default IndexPage;
