import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../../components';
import PageHeader from '../../components/PageHeader/PageHeader';
import Container from '../../components/Container';
import SEO from '../../components/utilities/seo';
import Link from '../../components/Link/Link';
import ReadingEntryInline from '../../components/ReadingEntryInline';
import { ReadingListEntry } from '../../models/ReadingListEntry';

const Reading = () => {
  const data = useStaticQuery(graphql`
    query {
      book: booksBeingRead {
        link
        title
        year
        author {
          link
          name
        }
      }
      github {
        repository(name: "reading-list", owner: "jamesrwilliams") {
          issues(first: 100) {
            nodes {
              number
              title
              createdAt
              closed
            }
          }
        }
      }
    }
  `);

  const { github: { repository: { issues: { nodes: issues } } }, book } = data;

  const unreadItems = issues.filter((item: any) => !item.closed);
  const readItems = issues.filter((item: any) => item.closed === true);

  const { author, title, link } = book;
  const { name } = author;

  return (
    <Layout>
      <PageHeader title="Reading" />
      <SEO title="Reading" />
      <Container>
        <p>
          To keep track of the books I am reading with <Link to="https://www.goodreads.com/review/list/108722272?shelf=read&sort=date_read">Goodreads</Link>.
          I&apos;m currently reading <Link to={link}>&quot;{title}&quot;</Link> by <em>{name}</em>.
          Below you can find a list of various blog posts and articles I have found and am
          in the process of reading or have already read:
        </p>
        <details id="unread">
          <summary>Unread ({ unreadItems.length })</summary>
          <ul>
            { unreadItems.map((entry: ReadingListEntry) => <ReadingEntryInline entry={entry} />) }
          </ul>
        </details>

        <details id="read">
          <summary>Read ({ readItems.length })</summary>
          <ul>
            { readItems.map((entry: ReadingListEntry) => <ReadingEntryInline entry={entry} />)}
          </ul>
        </details>

        <p>
          This page is powered by Github issues, which you can read about
          in this post: <Link to="/posts/using-github-issues-as-a-cms">Using Github Issues as a CMS</Link>.
        </p>
        <br />
      </Container>
    </Layout>
  );
};

export default Reading;
