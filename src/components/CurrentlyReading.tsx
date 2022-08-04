import {graphql, useStaticQuery} from "gatsby";
import Link from "./Link/Link";
import React from "react";

export const CurrentlyReading = () => {

  const data = useStaticQuery(graphql`
    query {
      book: booksBeingRead {
        link
        title
        year
        author {
          link
          name
        }
      }
    }
  `);

  const { author, title, link } = data.book;
  const { name } = author;

  return <><Link to={link}>&quot;{title}&quot;</Link> by <em>{name}</em></>
}
