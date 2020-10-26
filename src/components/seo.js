/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, image, published_time, path }) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaData = [
    {
      name: `author`,
      content: site.siteMetadata.author
    },
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: 'https://jamesrwilliams.ca/' + (path ? path : ''),
    },
    {
      property: 'og:image',
      content: 'https://jamesrwilliams.ca/' + image.url,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content:  site.siteMetadata.twitter,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: 'twitter:image:src',
      content: 'https://jamesrwilliams.ca/' + image.url,
    },
    {
      name: 'twitter:image:width',
      content: image.height
    },
    {
      name: 'twitter:image:height',
      content: image.height
    }
  ];

  if(published_time) {
    metaData.push({
      name: 'article:published_time',
      content: published_time
    })
  }

  if(path) {

  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaData.concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: '',
  image: {
    url: 'favicon.png',
    height: 512,
    width: 512
  }
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string
  }),
};

export default SEO;
