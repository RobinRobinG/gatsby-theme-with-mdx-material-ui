module.exports = {
  siteMetadata: {
    title: "title",
    author: "author",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
      },
    },
    `gatsby-plugin-material-ui`,
  ],
};
