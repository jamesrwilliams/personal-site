import React from 'react';
import Layout from '../components/layouts/Layout';
import PageHeader from '../components/PageHeader/PageHeader';
import SEO from '../components/utilities/seo';
import Container from '../components/Container';
import PostContent from '../components/utilities/PostContent';

export default function MarkdownPage({pageContext, children, ...other}: any) {

  const frontMatter = (pageContext.frontmatter ? pageContext.frontmatter : other.pageResources.component._frontmatter)

  const { title } = frontMatter;

  return (
    <Layout>
      <SEO
        title={title}
      />
      <main>
        <article>
          <PageHeader title={title} />
          <Container>
            <PostContent>
              { children }
            </PostContent>
          </Container>
        </article>
      </main>
    </Layout>
  );
}
