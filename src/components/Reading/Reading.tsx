import React from 'react';
import { BookInterface } from '../../models/BookInterface';
import Link from '../Link/Link';

const Reading = ({ book }: { book: BookInterface }) => {
  const { author, title, link } = book;
  const { name } = author;

  return (
    <p>I&apos;m currently reading <Link to={link}>&quot;{title}&quot;</Link> by {name}.</p>
  );
};

export default Reading;
