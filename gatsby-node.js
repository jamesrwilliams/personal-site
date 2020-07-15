/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require('axios');
const crypto = require('crypto');
const parser = require('xml2json');

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/postTemplate.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    const _slug =
      node.frontmatter.slug !== null
        ? node.frontmatter.slug
        : formatTitleToSlug(node.frontmatter.title);

    createPage({
      path: "/posts/" + _slug,
      component: blogPostTemplate,
      context: {
        slug: _slug,
        description: 'example'
      },
    });
  });

  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/cv",
    toPath: "/resume",
    isPermanent: true
  })

};

exports.sourceNodes = async ({ boundActionCreators }) => {

  const { createNode } = boundActionCreators;
  const request = `https://www.goodreads.com/review/list/108722272.xml?key=${process.env.GOODREADS_KEY}&v=2&shelf=currently-reading&sort=date_updated`;
  const getCurrentBookFromGoodreads = () => axios.get(request);
  // await for results
  const res = await getCurrentBookFromGoodreads();

  const { GoodreadsResponse } = parser.toJson(res.data, {object: true});

  const book = GoodreadsResponse.reviews.review.book;

  console.log(book);

  const { name, link } = book.authors.author;

  const bookNode = {
    // Required fields
    id: book.isbn13,
    parent: `__SOURCE__`,
    internal: {
      type: `BooksBeingRead`, // name of the graphQL query --> allRandomUser {}
    },
    children: [],
    year: book.publication_year,
    title: book.title,
    link: book.link,
    author: {
      name: name,
      link: link
    },
    description: book.description
  }

  // Get content digest of node. (Required field)
  const contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(bookNode))
    .digest(`hex`);
  // add it to userNode
  bookNode.internal.contentDigest = contentDigest;

  // Create node with the gatsby createNode() API
  createNode(bookNode);

}

function formatTitleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
