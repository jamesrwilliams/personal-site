/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require('axios');
const crypto = require('crypto');
const parser = require('xml2json');
const { shouldUpdateSearch } = require('./src/lib/update-search');

exports.onPreInit = async ({ reporter }) => {
  const shouldUpdateSearchIndex = shouldUpdateSearch();
  reporter.info(`${shouldUpdateSearchIndex ? 'We are' : 'Not'} updating search index.`);
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve('./src/components/layouts/postLayout.tsx');
  const { data } = await graphql(`
    {
      posts: allMdx(limit: 1000) {
        nodes {
          slug
        }
      }
    }
  `);

  const posts = data.posts.nodes;

  posts.forEach((post) => {
    createPage({
      path: `/posts/${post.slug}`,
      component: blogPostTemplate,
      context: {
        ...post,
      },
    });
  });

  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/cv',
    toPath: '/resume',
    isPermanent: true,
  });
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const request = `https://www.goodreads.com/review/list/108722272.xml?key=${process.env.GOODREADS_KEY}&v=2&shelf=currently-reading&sort=date_updated`;
  const getCurrentBookFromGoodreads = () => axios.get(request);
  const res = await getCurrentBookFromGoodreads();

  const { GoodreadsResponse } = parser.toJson(res.data, { object: true });

  const { book } = GoodreadsResponse.reviews.review[0];

  const { name, link } = book.authors.author;

  const bookNode = {
    id: book.isbn13,
    parent: '__SOURCE__',
    internal: {
      type: 'BooksBeingRead',
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
};
