import { graphql, useStaticQuery } from "gatsby";
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            author
            description
            social {
              name
              url
            }
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};
