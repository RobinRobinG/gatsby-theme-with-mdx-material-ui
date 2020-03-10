/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "😀 John Doe",
    author: "John",
    description: "I’m John and I’m a full stack developer!",
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "github",
        url: "https://www.facebook.com/",
      },
      {
        name: "email",
        url: "mailto:hello@robinguan.com",
      },
    ],
  },
  plugins: [
    "@robinguan/gatsby-mdx-mui-theme",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
