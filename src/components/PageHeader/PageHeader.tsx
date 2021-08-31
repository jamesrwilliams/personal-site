import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import {primaryBlue} from '../../variables';

const PageWrapper = styled.header`
  padding: 2.5rem 0;
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
      <h1>{title}</h1>
      {post && post.post_date ? <PageMeta date={post.post_date} timeToRead={timeToRead} /> : ''}
      {children}
    </Container>
  </PageWrapper>
);

export default PageHeader;

const PageMetaWrapper = styled.div`
  border-radius: 3px;
  margin-top: 5px;
  display: inline-block;
  //color: #fff;
  opacity: .7;
  padding: 0 5px;
`;

const PageMeta = ({ date, timeToRead }) => (
  <PageMetaWrapper>
    <time dateTime={new Date(date).toISOString()}>
      { new Date(date).toLocaleDateString('en-CA', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      }) }
    </time>
    <span> - </span>
    <span> { timeToRead } { timeToRead === 1 ? 'min' : 'mins' }  read time.</span>
  </PageMetaWrapper>
);
