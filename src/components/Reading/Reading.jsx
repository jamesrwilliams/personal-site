import React from 'react'

const Reading = ({book}) => {

  const { author, title, link } = book;
  const { name, authorLink } = author;

  const linkTitle = `${title} by ${name}, on GoodReads.com`;

  return (
    <p>I'm currently reading <a title={linkTitle} href={link}>{title}</a> by <a
      href={authorLink}>{name}</a>.</p>
  )
}

export default Reading;
