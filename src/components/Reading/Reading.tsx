import React from 'react';
import { BookInterface } from '../../models/BookInterface';

const Reading = ({ book }: { book: BookInterface }) => {
  const { author, title, link } = book;
  const { name, authorLink } = author;

  const linkTitle = `${title} by ${name}, on GoodReads.com`;

  return (
    <p>
      <span>I&apos;m currently reading: </span>
      <a title={linkTitle} href={link}>{title}</a>
      <span> by </span><a href={authorLink}>{name}</a>
      <span>.</span>
    </p>
  );
};

export default Reading;
