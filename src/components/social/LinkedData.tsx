import React from 'react';
import { socials } from '../../data/urls';

import { siteDescription } from '../../data/metadata';

interface JsonLinkedData {
  '@context': string;
  '@type': string;
  description: string;
  publisher: string;
  datePublished: string;
  headline: string;
  image: string[];
  wordcount?: string;
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': string;
  },
  author: {
    '@type': string;
    name: string;
    sameAs: string[],
  },
}

interface LinkedDataProps {
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
}: LinkedDataProps) => {
  const jsonLDTemplate: JsonLinkedData = {
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

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDTemplate, null, 4) }} />
  );
};

LinkedData.defaultProps = {
  excerpt: '',
  wordCount: '',
};

export default LinkedData;
