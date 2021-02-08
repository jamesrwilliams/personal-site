import React from 'react'
import PropTypes from 'prop-types'

function JSONLD({ data }: any) {

  const post = data.markdownRemark;

  const jsonLD: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "description": "I'm James, a full-stack web developer working in Toronto. I enjoy building delightfully fast, and engaging digital projects.",
    "publisher": "James R. Williams",
    "datePublished": post.frontmatter.date,
    "headline": post.frontmatter.title,
    "image": [
      "https://www.gravatar.com/avatar/b2623db89a42dd363c33d1d4df39654a?s=500"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://jamesrwilliams.ca/posts/" + post.frontmatter.slug
    },
    "author": {
      "@type": "Person",
      "name": "James R. Williams"
    }
  }

  if(post.wordCount) {
    jsonLD['wordcount'] = post.wordCount.words.toString();
  }

  if(post.frontmatter.updated) {
    jsonLD['dateModified'] = post.frontmatter.updated;
  }

  if(post.excerpt) {
    jsonLD['description'] = post.excerpt;
  }

  const JSONString = JSON.stringify(jsonLD, null, 4);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONString }} />
  );
}

JSONLD.propTypes = {
  data: PropTypes.object.isRequired,
};

export default JSONLD;
