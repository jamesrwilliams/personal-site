import React, {ReactNode} from 'react';
import styled from 'styled-components';
import Container from '../Container';
import formatDate from '../../lib/formatDate';
import {textGradient} from "../../theme/variables";

const PageWrapper = styled.aside`
  padding: 2rem 0 1rem;
  color: var(--typography-primary);
  position: relative;
  margin-bottom: 0;
  background: var(--brand-darker);

  a {
    text-decoration: underline;
  }

  @media screen and (min-width: 700px) {
    padding: 8rem 0 2.5rem;
  }

  h1 {
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    line-height: 1.4;
    ${textGradient}

    @media screen and (min-width: 700px) {
      font-size: 38px;
    }
  }
`;

interface PostMetaInterface {
  date: string;
  timeToRead?: string;
}

const PostMetaData = ({ date, timeToRead }: PostMetaInterface) => (
  <PageMetaWrapper>
    <time dateTime={new Date(date).toISOString()}>{ formatDate(date) }</time>
    { timeToRead && <ReadingTime timeToRead={timeToRead} /> }
  </PageMetaWrapper>
);

interface PageHeaderProps {
  title: string;
  date?: string;
  timeToRead?: string;
  children?: ReactNode;
}

const PageHeader = ({
  title, date, timeToRead, children,
}: PageHeaderProps) => (
  <PageWrapper>
    <Container>
      {date && <PostMetaData date={date} timeToRead={timeToRead} /> }
      <h1 itemProp="name">{title}</h1>
    </Container>
    { children ? <Container>{children}</Container> : '' }
  </PageWrapper>
);

export default PageHeader;

const PageMetaWrapper = styled.div`
  border-radius: 3px;
  margin-top: 5px;
  display: inline-block;
  opacity: .5;
  color: var(--typography-primary);
`;

const ReadingTime = ({ timeToRead }: {timeToRead: string}) => {
  return (
    <> · <span style={{ whiteSpace: "break-spaces" }}>
    { timeToRead }</span>
  </>
  );
};

