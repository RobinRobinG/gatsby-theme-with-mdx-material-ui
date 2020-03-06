module.exports = {
  siteMetadata: {
    title: "site title",
    author: "author",
    description:
      "Cotton candy powder jelly beans muffin ice cream carrot cake bonbon cookie icing. Tiramisu dessert marshmallow cotton candy pudding halvah. Macaroon candy canes oat cake carrot cake jujubes.",
    social: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "twitter",
        url: "https://www.twitter.com/",
      },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-material-ui`,
  ],
};
