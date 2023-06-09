export interface PostFrontMatter {
  title: string;
  date: string;
  dateReadable: string;
}

export interface PostObject {
  fields: {
    slug: string
  };
  body?: string;
  excerpt: string;
  timeToRead: string;
  internal: {
    contentFilePath: string;
  }
  frontmatter: PostFrontMatter
}
