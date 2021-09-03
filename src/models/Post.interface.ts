export default interface PostInterface {
  slug: string;
  body: string;
  excerpt: string;
  tableOfContents: string;
  timeToRead: string;
  fileAbsolutePath: string;
  frontmatter: {
    title: string;
    postDate: string;
    postDateTimestamp: string;
  }
}
