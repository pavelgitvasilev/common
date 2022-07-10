const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  developMiddleware: (app) => {
    app.use(
      '/rest',
      createProxyMiddleware({
        target: process.env.GATSBY_REST_URL,
        changeOrigin: true,
      })
    );
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.GATSBY_GRAPHQL_URL}`,
        schema: {
          perPage: 100,
          requestConcurrency: 1,
          previewRequestConcurrency: 1,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-awesome-pagination',
  ],
}