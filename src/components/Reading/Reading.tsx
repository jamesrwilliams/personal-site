import React from 'react';
import { BookInterface } from '../../models/BookInterface';
import Link from '../Link/Link';

const Reading = ({ book }: { book: BookInterface }) => {
  const { author, title, link } = book;
  const { name, link: authorLink } = author;

  console.log({ authorLink });
  console.log({ book });

  return (
    <p>I&apos;m currently reading <Link to={link}>&quot;{title}&quot;</Link> by {name}.</p>
  );
};

export default Reading;
