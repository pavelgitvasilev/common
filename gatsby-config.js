module.exports = {
    siteMetadata: {
        title: `Status Leasing`,
        description: ``,
        siteUrl: `https://status-leasing.by`,
        author: `Pavel Vasilyev`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        // {
        //     resolve: 'gatsby-plugin-google-tagmanager',
        //     options: {
        //         id: 'GTM-PFLN36G',

        //         defaultDataLayer: { platform: 'gatsby' },
        //     },
        // },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: 'http://status.local/common/wp/graphql',
                auth: {
                    htaccess: {
                        username: 'status',
                        password: 'statusadmin',
                    },
                },
                schema: {
                    perPage: 100,
                    requestConcurrency: 1,
                    previewRequestConcurrency: 1,
                },
            },
        },
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Statu Leasing`,
                short_name: `status-leasing.by`,
                start_url: `/`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-plugin-zopfli',
            options: {
                extensions: ['css', 'html', 'js', 'svg', 'json', 'webp'],
            },
        },
        {
            resolve: 'gatsby-plugin-brotli',
            options: {
                extensions: ['css', 'html', 'js', 'svg', 'json', 'webp'],
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-sass',
        },
    ],
};
