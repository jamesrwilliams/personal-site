/* eslint semi: 0 */
export default interface PostInterface {
  slug: string;
  body?: string;
  excerpt: string;
  timeToRead: string;
  fileAbsolutePath: string;
  frontmatter: {
    title: string;
    date: string;
    dateReadable: string;
  }
}
