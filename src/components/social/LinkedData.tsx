import React from 'react';
import {socials} from '../../data/urls';

const { siteDescription } = require('../../data/metadata');

interface JsonLinkedData {
  date: string;
  title: string;
  slug: string;
  excerpt?: string;
  wordCount?: string;
}

const LinkedData = ({
  date,
  title,
  slug,
  excerpt,
  wordCount,
}: JsonLinkedData) => {
  const jsonLDTemplate: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    description: siteDescription,
    publisher: 'James R. Williams',
    datePublished: date,
    headline: title,
    image: [
      'https://www.gravatar.com/avatar/b2623db89a42dd363c33d1d4df39654a?s=500',
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://jamesrwilliams.ca/posts/${slug}`,
    },
    author: {
      '@type': 'Person',
      name: 'James R. Williams',
      sameAs: socials,
    },
  };

  if (wordCount) {
    jsonLDTemplate.wordcount = wordCount;
  }

  if (excerpt) {
    jsonLDTemplate.description = excerpt;
  }

  const JSONString = JSON.stringify(jsonLDTemplate, null, 4);

  return (
    // eslint-disable-next-line react/no-danger
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONString }} />
  );
};

LinkedData.defaultProps = {
  excerpt: '',
  wordCount: '',
};

export default LinkedData;
