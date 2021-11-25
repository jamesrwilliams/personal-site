import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { primaryBlue } from '../../theme/variables';

const PageWrapper = styled.aside`
  padding: 2rem 0 1rem;
  color: ${primaryBlue};
  position: relative;
  margin-bottom: 0;
  background: linear-gradient(to bottom, #0ba7fd55, #fff0);

  @media screen and (min-width: 700px) {
    padding: 8rem 0 2.5rem;
  }

  h1 {
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    line-height: 1.4;

    @media screen and (min-width: 700px) {
      font-size: 38px;
    }
  }
`;

const PageHeader = ({
  title, post, timeToRead, children,
}: any) => (
  <PageWrapper>
    <Container>
      {post && post.postDate ? <PageMeta date={post.postDate} timeToRead={timeToRead} /> : ''}
      <h1 itemProp="name">{title}</h1>
    </Container>
    {children}
  </PageWrapper>
);

export default PageHeader;

const PageMetaWrapper = styled.div`
  border-radius: 3px;
  margin-top: 5px;
  display: inline-block;
  opacity: .8;
  color: #4a4d70;
`;

interface PageMetaInterface {
 date: string;
 timeToRead: number;
}

const PageMeta = ({ date, timeToRead }: PageMetaInterface) => (
  <PageMetaWrapper>
    <span>Posted on </span>
    <time dateTime={new Date(date).toISOString()}>
      { new Date(date).toLocaleDateString('en-CA', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      }) }
    </time>
    <span> · { timeToRead } min read.</span>
  </PageMetaWrapper>
);
