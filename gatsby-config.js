const { siteDescription } = require('./src/data/metadata');

require('dotenv').config({
  path: '.env',
});

const searchQuery = `{
   allMdx {
    nodes {
      fileAbsolutePath
      excerpt
      frontmatter {
        title
        post_date_timestamp: date(formatString: "X")
      }
    }
  }
}`;

const shouldUpdateSearchIndex = process.env.NETLIFY === true && process.env.CONTEXT === 'production';

// eslint-disable-next-line no-console
console.log(`[SEARCH] ${shouldUpdateSearchIndex ? 'We are' : 'Not'} updating search index.`);

/**
 * This works out the year directories for all my posts
 * and creates a unique source node call for each directory.
 *
 * This approach avoids having the year in the URL but lets me keep my posts organised
 * in year directories.
 *
 * Just using one source of `/src/posts` would be /posts/{YEAR}/{SLUG} rather
 * than what I want: /posts/{SLUG}
 */
function buildSourceCalls(name = 'posts') {
  const startYear = 2015;
  const years = new Date().getFullYear() - startYear;
  const output = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < years + 1; i++) {
    output.push({
      resolve: 'gatsby-source-filesystem',
      options: {
        name,
        path: `${__dirname}/src/posts/${startYear + i}`,
      },
    });
  }

  return output;
}

module.exports = {
  siteMetadata: {
    title: 'James R. Williams',
    siteUrl: 'https://jamesrwilliams.ca',
    description: siteDescription,
    twitter: '@james_rwilliams',
    author: 'James R. Williams',
    buildId: process.env.BUILD_ID,
  },
  plugins: [
    ...buildSourceCalls(),
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/posts/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/postLayout.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-mermaid',
            options: {
              language: 'mermaid',
              theme: 'neutral',
              viewport: {
                width: 650,
                height: 400,
              },
              mermaidOptions: {
                themeCSS: '.node rect { fill: #fff; }',
                fontSize: 12,
              },
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M20,10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4H20z M14,14h-4v-4h4V14z"/></g></svg>',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: { sh: 'bash', js: 'javascript' },
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: true,
              maxWidth: 1200,
              quality: 100,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-26549429-1',
        head: true,
        defer: true,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        skipIndexing: !shouldUpdateSearchIndex,
        queries: [
          {
            query: searchQuery,
            transformer: ({ data }) => data.allMdx.nodes.map((node) => {
              // TODO fix this to remove the disable

              const split = node.fileAbsolutePath.split('/');
              const indexOfSrc = split.indexOf('src');

              // eslint-disable-next-line no-param-reassign
              node.objectID = split.slice(indexOfSrc, split.length).join('-');

              const output = { ...node, ...node.frontmatter };
              // Don't make index changes here unless it's not possible
              // using the GraphQL query on #L7.
              delete output.frontmatter;
              return output;
            }),
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'jamesrwilliams.ca',
    //     short_name: 'JRW',
    //     lang: 'en',
    //     start_url: '/',
    //     background_color: '#021526',
    //     theme_color: '#021526',
    //     display: 'minimal-ui',
    //     icon: 'static/favicon.png', // This path is relative to the root of the site.
    //   },
    // },
  ],
};
