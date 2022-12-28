/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface metaObjectInterface {
    [name: string]: string;
}

interface SEOProps {
    description: string;
    title?: string;
    lang?: string;
    meta?: [];
    image?: {
        url: string;
        height: string;
        width: string;
    };
    publishedTime?: string;
    path?: string;
}

const SEO = ({
  description, lang, meta = [], title, image, publishedTime, path,
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            twitter,
            description
            author
          }
        }
      }
    `,
  );

  const {
    description: defaultDescription, title: defaultTitle, twitter, author,
  } = site.siteMetadata;

  const baseUrl = 'https://jamesrwilliams.ca';

  const usedPath = path ? `${baseUrl}/${path}` : baseUrl;

  const usedTitle = title ? `${title} | ${defaultTitle}`: defaultTitle;

  const metaObject: metaObjectInterface = {
    author,
    description: defaultDescription,
    'og:title': usedTitle,
    'og:description': defaultDescription,
    'og:type': 'website',
    'og:url': usedPath,
    'og:image': 'https://jamesrwilliams.ca/favicon.png',
    'twitter:card': 'summary',
    'twitter:creator': twitter,
    'twitter:title': usedTitle,
    'twitter:description': defaultDescription,
    'twitter:image:src': 'https://jamesrwilliams.ca/favicon.png',
    'twitter:image:width': '512',
    'twitter:image:height': '512',
  };

  if (image) {
    metaObject['twitter:image:width'] = image.width;
    metaObject['twitter:image:height'] = image.height;
    metaObject['twitter:image:src'] = `https://jamesrwilliams.ca/${image.url}`;
  }

  if (description) {
    metaObject.description = description;
    metaObject['og:description'] = description;
    metaObject['twitter:description'] = description;
  }

  if (path) {
    metaObject['og:url'] = usedPath;
  }

  if (publishedTime) {
    metaObject['article:published_time'] = publishedTime;
  }

  const output = Object.entries(metaObject).map(([key, value]) => ({ name: key, content: value }));

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        { rel: 'canonical', href: usedPath }
      ]}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={output.concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  publishedTime: '',
  path: '',
  image: {
    url: 'favicon.png',
    height: 512,
    width: 512,
  },
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  publishedTime: PropTypes.string,
  path: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string,
  }),
};

export default SEO;
