import React from "react";
import "./reading.scss";
import { graphql, useStaticQuery } from 'gatsby'

const ReadingBlock = () => {

  const data = useStaticQuery(graphql`
    query {
      allBooksBeingRead(limit: 1) {
        nodes {
          id
          link
          title
          description
          year
          author {
            link
            name
          }
        }
        }
      }`)

  const book = data.allBooksBeingRead.nodes[0];

  return (
    <>
      <section className="currently-reading container">
        <h2>Currently reading</h2>
        <p>I'm currently reading: "<a href={book.link}>{book.title}</a>" { book.year ? '(' + book.year + ')' : '' } by <a
          href={book.author.link}>{book.author.name}</a>.</p>
      </section>
    </>
  );
};

export default ReadingBlock;
