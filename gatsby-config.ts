import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    siteMetadata: {
      title: `suprabhaatham`,
    },
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-antd",
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    // `gatsby-plugin-sitemap`,
    'gatsby-plugin-apollo',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "suprabhaatham-cms",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, 
        },
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://suprabhaatham-dev.herokuapp.com/graphql'
      }
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`limelight`, `source sans pro\:300,400,400i,700`],
        display: "swap",
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: "https://suprabhaatham-dev.herokuapp.com/graphql"
      }
    },
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Pacific/Auckland',
        format: 'ddd, DD MMM YYYY hh:mm A',
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "suprabhaatham",
      },
    },
  ],
};

export default config;
