/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Hello",
    author: "author hello",
    description:
      "Cotton candy powder jelly beans muffin ice cream carrot cake bonbon cookie icing. Tiramisu dessert marshmallow cotton candy pudding halvah. Macaroon candy canes oat cake carrot cake jujubes.",
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
