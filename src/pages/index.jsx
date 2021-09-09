import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Hero, Layout, PostLink } from '../components';

import SEO from '../components/utilities/seo';
import Container from '../components/Container';
import ProjectTile from '../components/ProjectTile';
import StyledLink from '../components/StyledLink';
import { mediaQuery } from '../theme/variables';

const { siteDescription } = require('../data/metadata');

const PostGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 2rem;

  @media screen and ${mediaQuery.minMd} {
    flex-direction: row;
  }
`;

const IndexPage = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allMdx(limit: 5, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          ...blogFields
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title=""
        description={siteDescription}
      />
      <Hero />

      <Container>
        <h2>Recent posts</h2>
        { posts.nodes.map((_post) => (
          <PostLink key={_post.slug} slug={`/posts/${_post.slug}`} post={_post} />
        ))}

        <p style={{ textAlign: 'center', textDecoration: 'none' }}><StyledLink to="/posts/">View all</StyledLink></p>

        <h2>Current projects</h2>
        <PostGrid>
          <ProjectTile
            title="Flagpole"
            language="PHP"
            description="Easily register and work with feature flags in your theme with Flagpole. This WordPress plugin allows developers to easily configure feature flags in your WordPress themes. "
            url="https://github.com/jamesrwilliams/flagpole"
          />
          <ProjectTile
            title="image-api-service"
            description="A Python/Flask API that generates dynamic images for use in README files and web pages."
            language="Python"
            url="https://github.com/jamesrwilliams/image-api-service"
          />
          <ProjectTile
            title="batch-commit"
            description="An experiment in writing Git automation tools as a NodeJS CLI with Oclif. This automates creation of empty commits and tags to trigger CI activities in bulk. "
            language="JavaScript"
            url="https://github.com/jamesrwilliams/batch-commit"
          />
        </PostGrid>
      </Container>
    </Layout>
  );
};

export default IndexPage;
