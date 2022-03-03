import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader/PageHeader';
import parseItemUrl from '../lib/parseItemURL';
import Link from '../components/Link/Link';
import formatDate from '../lib/formatDate';
import SEO from '../components/utilities/seo';

const ReadingListEntryTemplate = ({ data }: any) => {
  const { github: { repository: { issue: entry } } } = data;

  const { url, description } = parseItemUrl(entry);

  const { createdAt, updatedAt, number } = entry;

  const BASE_URL = 'https://github.com/jamesrwilliams/personal-reading-list/';

  return (
    <Layout>
      <PageHeader title={entry.title} />
      <SEO title={`Reading List Entry #${number}`} />
      <Container>
        <p>
          <span>Added { formatDate(createdAt, 'numeric') }</span>
          <span> · </span>
          <span>Updated { formatDate(updatedAt, 'numeric') }</span>
        </p>
        <Link to={url}>{ url }</Link>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <nav>
          <Link type="button" to={`${BASE_URL}issues/${entry.number}`}>View on Github</Link>
          <Link type="button" to="../">Back</Link>
        </nav>
      </Container>
    </Layout>
  );
};

export default ReadingListEntryTemplate;

export const query = graphql`
  query EntryQuery($number: Int!) {
    github {
      repository(name: "personal-reading-list", owner: "jamesrwilliams") {
        issue(number: $number) {
          number
          title
          bodyHTML
          createdAt
          lastEditedAt
          updatedAt
          comments(first: 100) {
            totalCount
            nodes {
              bodyHTML
            }
          }
        }
      }
    }
  }
`;
