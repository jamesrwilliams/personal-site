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
  const blogPostTemplate = require.resolve(`./src/templates/postTemplate.tsx`);
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
              post_date: date,
              post_date_timestamp: date(formatString: "X")
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

exports.sourceNodes = async ({ actions }) => {

  const { createNode } = actions;
  const request = `https://www.goodreads.com/review/list/108722272.xml?key=${process.env.GOODREADS_KEY}&v=2&shelf=currently-reading&sort=date_updated`;
  const getCurrentBookFromGoodreads = () => axios.get(request);
  const res = await getCurrentBookFromGoodreads();

  const { GoodreadsResponse } = parser.toJson(res.data, {object: true});

  const book = GoodreadsResponse.reviews.review.book;

  const { name, link } = book.authors.author;

  const bookNode = {
    id: book.isbn13,
    parent: `__SOURCE__`,
    internal: {
      type: `BooksBeingRead`,
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

  bookNode.internal.contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(bookNode))
    .digest(`hex`);

  createNode(bookNode);

}

function formatTitleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
