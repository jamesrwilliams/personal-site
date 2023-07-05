import {graphql, Link} from "gatsby";
import React from "react";
import {Layout, PageHeader, Container} from "../../../components";
import styled from "styled-components";
import {Meta} from "../../../components/utilities/Meta";
import {getTagLink} from "../../../lib/getTagLink";

const TagColumns = styled.ol`
  columns: 1;
  list-style-position: inside;
  padding: 0;

  @media screen and (min-width: 700px) {
    columns: 2;
  }
`;

interface TagGroup {
  fieldValue: string;
  totalCount: string;
}

interface PageQuery {
  data: {
    allMdx: {
      group: TagGroup[]
    }
  }
}

const TagsPage = ({ data }: PageQuery) => {

  // Sort our tags by their totalCount
  const tags = data.allMdx.group.sort((a, b) => parseFloat(b.totalCount) - parseFloat(a.totalCount));

  return (<Layout>
    <main>
      <PageHeader title="Tags" />
      <Container>
        <p>All tags</p>
        <TagColumns>
        { tags.map((tag) => (
          <li><Link to={getTagLink(tag.fieldValue)}>
            <code>{tag.fieldValue}</code> ({tag.totalCount})
          </Link></li>
        )) }
        </TagColumns>
      </Container>
    </main>
  </Layout>)
};

export default TagsPage;

export const Head = () => <Meta title={"Tags"} />;

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 2000
      filter: {internal: {contentFilePath: {regex: "/posts/"}}}
    ) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`;
