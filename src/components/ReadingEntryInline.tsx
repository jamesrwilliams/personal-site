import React from 'react';
import Link from './Link/Link';
import { ReadingListEntry } from '../models/ReadingListEntry';

const ReadingEntryInline = ({ entry }: { entry: ReadingListEntry }) => {
  const { title, number } = entry;

  return (
    <li>
      <Link to={`./${number}`}>{ title }</Link>
    </li>
  );
};

export default ReadingEntryInline;
