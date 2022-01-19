/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src")],
    prependData: `@use 'styles/variables' as *;`,
  },
};

module.exports = nextConfig;
