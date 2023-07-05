import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime
        siteMetadata {
          buildId,
          title
          description
          twitterUsername
          siteUrl
        }
      }
    }
  `)

  return {
    buildTime: data.site.buildTime,
    ...data.site.siteMetadata,
  }
}
