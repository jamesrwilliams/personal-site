import { siteDescription } from './src/data/metadata';
import remarkGfm from 'remark-gfm';
import dotenv from 'dotenv';
import type { GatsbyConfig } from "gatsby"

dotenv.config({
  path: '.env',
});

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
  const startYear = 2017;
  const years = new Date().getFullYear() - startYear;

  const output = [];
  for (let i = 0; i < years + 1; i++) {
    output.push({
      resolve: 'gatsby-source-filesystem',
      options: {
        name,
        path: `${__dirname}/src/posts/${startYear + i}`,
        ignore: [`**/.*`],
      },
    });
  }

  return output;
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'James R. Williams',
    siteUrl: 'https://jamesrwilliams.ca',
    description: siteDescription,
    twitterUsername: '@james_rwilliams',
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
        ignore: [`**/.*`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
        ignore: [`**/.*`],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
          ]
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              svgo: {},
              mermaidConfig: {
                theme: 'dark',
              }
            }
          },
          'gatsby-remark-code-titles',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              isIconAfterHeader: true,
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
              aliases: {sh: 'bash', js: 'javascript'},
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
              // Customize the prompt used in a shell output
              // Values below are default
              prompt: {
                user: 'usr',
                host: 'localhost',
                global: false,
              },
              // By default, the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jamesrwilliams.ca',
        short_name: 'JRW',
        lang: 'en',
        start_url: '/',
        background_color: '#021526',
        theme_color: '#021526',
        display: 'minimal-ui',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;
