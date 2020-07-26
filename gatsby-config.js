/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ESSENTIALS",
    description: "おいしい食材と食事を探求するサイト",
    lang: "ja",
    siteUrl: "https://wizardly-leavitt-0885ab.netlify.app",
    locale: "ja_JP",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
  ],
}
