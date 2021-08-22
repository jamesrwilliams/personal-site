import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import {primaryBlue} from '../../variables';

const PageWrapper = styled.div`
    padding: 2rem;
    background: ${primaryBlue};
    color: #fff;
`;

const PageHeader: React.FC<{ title: string, post?: PostInterface | undefined }> = ({ title, post, children }) => (
  <PageWrapper>
    <Container>
      <h1>{title}</h1>
      {post && post.date ? (
        <div className="mt-4">
          <span className="text-opacity-50">
            {post.draft ? <mark>Draft dated</mark> : 'Published'}
            {' '}
          </span>
          <time dateTime={new Date(post.date).toISOString()}>
            {post.date}
            .
          </time>
        </div>
      ) : ''}
      {children}
    </Container>
  </PageWrapper>
);

export default PageHeader;
