/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import {GatsbyNode} from "gatsby";
import readingTime from 'reading-time';
import path from "path";

import axios from 'axios';
import crypto from 'crypto';
import {toKebabCase} from "./src/lib/toKebabCase";

interface BlogPostInterface {
  id: string;
  internal: {
    contentFilePath: string;
  }
  fields: {
    slug: string;
  }
}

interface TagGroupsInterface {
  fieldValue: string;
}

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('./src/templates/BlogPostTemplate.tsx');
  const queryResponse = await graphql(`
    {
      posts: allMdx(
        limit: 1000
        filter: { internal: {contentFilePath: {regex: "/posts/"}}}
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      },
      tagsGroup: allMdx(
        limit: 1000,
        filter: { internal: {contentFilePath: {regex: "/posts/"}}}
      ) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  const posts = queryResponse?.data?.posts?.nodes;

  if(posts) {
    posts.forEach((post: BlogPostInterface) => {
      createPage({
        path: `/posts/${post.fields.slug}`,
        component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          ...post,
        },
      });
    });
  }

  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/cv',
    toPath: '/resume',
    isPermanent: true,
  });



  /**
   * Create Tag Archive and singles
   */
  const tagTemplate = path.resolve('./src/templates/Tags.tsx');
  const tags = queryResponse?.data?.tagsGroup?.group;

  tags.forEach((tag: TagGroupsInterface) => {
    createPage({
      path: `posts/-/tags/${toKebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions }) => {
  const {createNodeField} = actions;

  if (node.internal.type === `Mdx`) {
    if(!node.internal.contentFilePath) {
      console.warn(`MDX Node missing contentFilePath unable to generate slug`);
      return;
    }
    createNodeField({
      node,
      name: `slug`,
      value: `${node.internal.contentFilePath.split('/posts/')[1].split('.')[0].split('/')[1]}`
    });

    if(node.body) {
      createNodeField({
        node,
        name: `timeToRead`,
        value: readingTime(node.body.toString())
      })
    }
  }
}

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({ actions }) => {
  const { createNode } = actions;

  // Create carbonFootprint
  const carbonRequest = 'https://api.websitecarbon.com/site?url=https://jamesrwilliams.ca';
  const carbonFootprintResponse = await axios.get(carbonRequest);

  if(carbonFootprintResponse.data) {

    const carbonFootprintData = carbonFootprintResponse.data;

    const carbonNode = {
      id: 'carbonFootprint',
      parent: '__SOURCE__',
      internal: {
        type: 'CarbonFootprint',
      },
      children: [],
      ...carbonFootprintData
    };

    carbonNode.internal.contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(carbonNode))
      .digest('hex');

    createNode(carbonNode);
  }
};
