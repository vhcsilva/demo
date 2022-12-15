const path = require("path");
require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  publicRuntimeConfig: {
    ipfsProjectId: process.env.IPFS_PROJECT_ID,
    ipfsKeySecret: process.env.IPFS_KEY_SECRET,
    ipfsApiEndpoint: process.env.IPFS_API_ENDPOINT,
    ipfsPublicEndpoint: process.env.IPFS_PUBLIC_ENDPOINT
  }
}

module.exports = nextConfig
