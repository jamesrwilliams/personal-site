import React, {ReactNode} from 'react';
import { Container } from '../../components';
import formatDate from '../../lib/formatDate';
import {PageMetaWrapper, PageWrapper} from "./PageHeader.styled";

interface PostMetaProps {
  date: string;
  timeToRead?: string;
}

const PostMetaData = ({ date, timeToRead }: PostMetaProps) => (
  <PageMetaWrapper>
    <time dateTime={new Date(date).toISOString()}>{ formatDate(date) }</time>
    { timeToRead && (
      <>
        <span> · </span>
        <span style={{ whiteSpace: "break-spaces" }}>{ timeToRead }</span>
      </>
    ) }
  </PageMetaWrapper>
);

interface PageHeaderProps {
  title: string;
  date?: string;
  timeToRead?: string;
  children?: ReactNode;
}

export const PageHeader = ({
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

