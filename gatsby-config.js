const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

/* eslint-disable-next-line */
console.log(`Using environment config: '${activeEnv}'`);
require('dotenv').config({path: `.env.${activeEnv}`});

module.exports = {
    siteMetadata: {
        title: `One World website`,
        description: ``,
        author: ``,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        // {
        //   resolve: `gatsby-source-filesystem`,
        //   options: {
        //     name: `images`,
        //     path: `${__dirname}/src/images`,
        //   },
        // },
        'gatsby-transformer-json',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `static/img/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // data: common
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'common',
                path: `${__dirname}/data/common`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'pages',
                path: `${__dirname}/data/pages`,
            },
        },
        'gatsby-plugin-styled-components',
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
]   ,
};
