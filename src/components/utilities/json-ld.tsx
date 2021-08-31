import React from 'react';

function JSONLD({
  date,
  title,
  slug,
  excerpt,
  wordCount,
}: any) {
  const jsonLD: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    description: "I'm James, a full-stack development engineer working in Toronto. I enjoy building delightfully fast, and engaging digital projects.",
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
    },
  };

  if (wordCount) {
    jsonLD.wordcount = wordCount;
  }

  if (excerpt) {
    jsonLD.description = excerpt;
  }

  const JSONString = JSON.stringify(jsonLD, null, 4);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONString }} />
  );
}

export default JSONLD;
