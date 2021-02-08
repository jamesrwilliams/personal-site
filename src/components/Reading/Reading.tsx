import React from 'react'

const Reading: React.FC<{ book: BookInterface }> = ({book}) => {

  const { author, title, link } = book;
  const { name, authorLink } = author;

  const linkTitle = `${title} by ${name}, on GoodReads.com`;

  return (
      <span>I'm currently reading: "<a title={linkTitle} href={link}>{title}</a>" by <a
          href={authorLink}>{name}</a>.</span>
  )
}

export default Reading;
