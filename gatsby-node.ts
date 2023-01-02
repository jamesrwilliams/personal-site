/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import {GatsbyNode} from "gatsby";
import PostInterface from "./src/models/PostInterface";
import path from "path";

const axios = require('axios');
const crypto = require('crypto');
const parser = require('xml2json');
const _ = require("lodash")

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  /* Blog Post Pages */
  const blogPostTemplate = path.resolve('./src/templates/BlogPostTemplate.tsx');
  const queryResponse: any = await graphql(`
    {
      posts: allMdx(limit: 1000, filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        nodes {
          slug
        }
      },
      tagsGroup: allMdx(limit: 2000, filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      },
       github {
        repository(name: "personal-reading-list", owner: "jamesrwilliams") {
          issues(first: 100) {
            nodes {
              number
            }
          }
        }
      }
    }
  `);

  const posts: PostInterface[] = queryResponse.data.posts.nodes;

  if(posts) {
    posts.forEach((post) => {
      createPage({
        path: `/posts/${post.slug}`,
        component: blogPostTemplate,
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
  // @ts-ignore
  const tags = queryResponse.data.tagsGroup.group;

  tags.forEach((tag: any) => {
    createPage({
      path: `posts/-/tags/${_.kebabCase(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

};

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({ actions }) => {
  const { createNode } = actions;
  const request = `https://www.goodreads.com/review/list/108722272.xml?key=${process.env.GOODREADS_KEY}&v=2&shelf=currently-reading&sort=date_updated`;
  const getCurrentBookFromGoodreads = () => axios.get(request);
  const res = await getCurrentBookFromGoodreads();

  const { GoodreadsResponse } = parser.toJson(res.data, { object: true });

  let book;

  if (GoodreadsResponse.reviews.total === '1') {
    book = GoodreadsResponse.reviews.review.book;
  } else {
    book = GoodreadsResponse.reviews.review[0].book;
  }

  const { name, link } = book.authors.author;

  const bookNode = {
    id: book.isbn13,
    parent: '__SOURCE__',
    internal: {
      type: 'BooksBeingRead',
      contentDigest: '',
    },
    children: [],
    year: book.publication_year,
    title: book.title,
    link: book.link,
    author: {
      name,
      link,
    },
    description: book.description,
  };

  bookNode.internal.contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(bookNode))
    .digest('hex');

  createNode(bookNode);

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
