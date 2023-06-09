import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../../components';
import PageHeader from '../../components/PageHeader/PageHeader';
import Container from '../../components/Container';
import Link from '../../components/Link/Link';
import { ReadingListEntryInterface } from '../../types/ReadingListEntry.interface';
import PostContent from "../../components/utilities/PostContent";
import {Meta} from "../../components/utilities/Meta";

const Reading = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        repository(name: "reading-list", owner: "jamesrwilliams") {
          issues(
            first: 100
            orderBy: {field: CREATED_AT, direction: DESC}
            filterBy: {states: OPEN}
          ) {
            nodes {
              number
              bodyHTML
              title
              createdAt
            }
          }
        }
      }
    }
  `);

  const { github: { repository: { issues: { nodes: issues } } }} = data;

  return (
    <Layout>
      <main>
        <PageHeader title="Reading" />
        <Container>
        <PostContent>
        <p>
          This page is periodically updated from my reading list of blog posts and other resources I
          find online. This page is powered by Github issues, which you can read about
          in this post: <Link to="/posts/using-github-issues-as-a-cms">Using Github Issues as a CMS</Link>.
          Due to the 100 item limit on the GitHub GraphQL API, this page is limited to the 100 most
          recent items I've added.
        </p>
        </PostContent>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
            { issues.map((entry: ReadingListEntryInterface) => {
              const { number, title, createdAt, bodyHTML } = entry;

              return (
                <tr key={number} id={`item-${number}`}>
                  <td style={{verticalAlign: "top"}}>#{ number }</td>
                  <td>
                    <Link to={extractUrl(bodyHTML)}>{ title }</Link><br/>
                    <span>{ new Date(createdAt).toLocaleDateString() }</span>
                  </td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </Container>
      </main>
    </Layout>
  );
};

export default Reading;

export const Head = () => <Meta title={"Reading"} />

const extractUrl = (content: string) => {
  const regexString = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
  const result = content.match(regexString);
  if(result) {
    return result[0];
  } else {
    return '';
  }
}
