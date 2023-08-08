/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'standalone',
  productionBrowserSourceMaps: true,
  images: {
    dangerouslyAllowSVG: true,
  },
  compiler: {
    styledComponents: true,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/_variables.scss";
    @import "@/styles/_mixins.scss";
  `,
  },
};

module.exports = nextConfig;
