/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

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
              draft
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

  let hiddenPosts = 0;

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    const _slug =
      node.frontmatter.slug !== null
        ? node.frontmatter.slug
        : formatTitleToSlug(node.frontmatter.title);

    const isDraft = (node.frontmatter.draft === true);

    if(activeEnv === 'production' && isDraft === true) {
      hiddenPosts++;
    } else {
      createPage({
        path: "/posts/" + _slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: _slug,
        },
      });
    }
  });

  if(hiddenPosts > 0) {
    console.log(`Ignoring ${hiddenPosts} draft posts.`);
  }

};

function formatTitleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
