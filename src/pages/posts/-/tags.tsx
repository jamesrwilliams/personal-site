import {graphql, Link} from "gatsby";
import React from "react";
import {Layout} from "../../../components";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Container from "../../../components/Container";
import SEO from "../../../components/utilities/seo";
import {PostTag} from "../../../models/Tag.interface";
import {getTagLink} from "../../../components/utilities";
import styled from "styled-components";

const TagColumns = styled.ol`
  columns: 1;
  list-style-position: inside;
  padding: 0;

  @media screen and (min-width: 700px) {
    columns: 2;
  }
`;

// @ts-ignore
const TagsPage = ({ data }) => {

  // Sort our tags by their totalCount
  const tags = data.allMdx.group.sort((a: any, b: any) => parseFloat(b.totalCount) - parseFloat(a.totalCount));

  return (<Layout>
    <SEO title="Tags" />
    <main>
      <PageHeader title="Tags" />
      <Container>
        <p>All tags</p>
        <TagColumns>
        { tags.map((tag: PostTag) => (
          <li><Link to={getTagLink(tag.fieldValue)}>
            <code>{tag.fieldValue}</code> ({tag.totalCount})
          </Link></li>
        )) }
        </TagColumns>
      </Container>
    </main>
  </Layout>)
};

export default TagsPage

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000, filter: { fileAbsolutePath: {regex: "/posts/"} }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
