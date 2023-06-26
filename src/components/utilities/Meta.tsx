import React from "react";
import {FC, PropsWithChildren} from "react";
import {useSiteMetadata} from "../../hooks/use-site-metadata";
import {BlogFields} from "../../templates/BlogPostTemplate";
import {socials} from "../../data/urls";

export interface MetaAttributes {
  title?: string;
  description?: string;
  pathname?: string;
  date?: string;
  post?: BlogFields;
}

/**
 *
 * Based on the Gatsby tutorial (accessed 2023-06-08)
 *
 * @see https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component
 */
export const Meta: FC<PropsWithChildren<MetaAttributes>> = (
  {
    title,
    description,
    pathname,
    children,
    post
  }) => {

    const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, buildTime, buildId } = useSiteMetadata();

    const seo = {
      title: title ? `${title} | ${defaultTitle}` : defaultTitle,
      description: description || defaultDescription,
      image: image ? `${siteUrl}${image}` : 'https://jamesrwilliams.ca/favicon.png',
      url: `${siteUrl}${pathname || ``}`,
      twitterUsername,
    }

    const globalJSONLD = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: defaultTitle,
      url: seo.url,
      logo: 'https://jamesrwilliams.ca/favicon.png',
    };

    return (
      <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <meta name="netlify-last-deployed" content={buildTime}/>
        <meta name="netlify-build-id" content={buildId}/>

        <meta name="og:title" content={seo.title} />
        <meta name="og:description" content={seo.description} />
        <meta name="og:type" content={'website'} />
        <meta name="og:url" content={seo.url} />
        <meta name="og:image" content={'https://jamesrwilliams.ca/favicon.png'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:creator" content={seo.twitterUsername} />

        <script type="application/ld+json">
          {JSON.stringify(globalJSONLD, null, 4)}
        </script>

        { post && <PostLinkedData post={post} /> }

        <a rel="me" href="https://mastodon.social/@jamesrwilliams">Mastodon</a>

        {children}
      </>
    )
}

interface PostLinkedData {
  post: BlogFields;
}

const PostLinkedData: FC<PostLinkedData> = ({post }) => {

  const { excerpt, frontmatter, fields } = post;

  const postJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    description: excerpt,
    wordcount: fields.timeToRead.words,
    publisher: 'James R. Williams',
    datePublished: frontmatter.date,
    headline: frontmatter.title,
    image: [
      'https://www.gravatar.com/avatar/b2623db89a42dd363c33d1d4df39654a?s=500',
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://jamesrwilliams.ca/posts/${fields.slug}`,
    },
    author: {
      '@type': 'Person',
      name: 'James R. Williams',
      sameAs: socials,
    },
  };

  return (
    <script type={'application/ld+json'}>
      { JSON.stringify(postJsonLd, null, 4) }
    </script>
  )
}
