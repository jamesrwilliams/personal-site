/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require('axios');
const crypto = require('crypto');
const parser = require('xml2json');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve('./src/components/postLayout.tsx');
  const { data } = await graphql(`
    {
      posts: allMdx(limit: 1000) {
        nodes {
          slug
          body
          excerpt
          tableOfContents
          timeToRead
          frontmatter {
            title
            post_date: date,
            post_date_timestamp: date(formatString: "X")
          }
        }
      }
    }
  `);

  const posts = data.posts.nodes;

  posts.forEach((post, index) => {
    // Work out the next/previous posts (chronologically)
    const nextNode = (index === 0 ? null : posts[index - 1]);
    const previousNode = (index === posts.length - 1 ? null : posts[index + 1]);

    createPage({
      path: `/posts/${post.slug}`,
      component: blogPostTemplate,
      context: {
        ...post,
        pagination: {
          previous: previousNode,
          next: nextNode,
        },
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
