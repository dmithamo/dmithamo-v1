const path = require('path');
module.exports = {
  siteMetadata: {
    title: `dmithamo`,
    description: `Homepage of software developer Dennis Mithamo`,
    author: `@dmithamo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
  ],
};
