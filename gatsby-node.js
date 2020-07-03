/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/postTemplate.js`);
  const filter = 'filter: { frontmatter: {draft: { ne: true }}}';
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        ${activeEnv === 'production' ? filter : '' }
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

};

function formatTitleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
