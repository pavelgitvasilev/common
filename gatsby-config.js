module.exports = {
    siteMetadata: {
        title: `Plazo`,
        description: ``,
        siteUrl: `https://plazo.com.mx`,
        author: `vladimir-kamenkov`,
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
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-PFLN36G',

                defaultDataLayer: { platform: 'gatsby' },
            },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: 'http://status.local/common/wp/graphql',
                // url: 'https://qa-delivery-solva-mx-master.moneyman.ru/wp/graphql',
                auth: {
                    htaccess: {
                        username: 'moneyman',
                        password: '1005',
                    },
                },
            },
        },
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Plazo.com.mx`,
                short_name: `Plazo.com.mx`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-styled-components`,
        // {
        //     resolve: 'gatsby-plugin-zopfli',
        //     options: {
        //         extensions: ['css', 'html', 'js', 'svg', 'json', 'webp']
        //     }
        // },
        // {
        //     resolve: 'gatsby-plugin-brotli',
        //     options: {
        //         extensions: ['css', 'html', 'js', 'svg', 'json', 'webp']
        //     }
        // },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-sass',
        },
    ],
};
