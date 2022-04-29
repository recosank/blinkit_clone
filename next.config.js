/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ROOT: __dirname,
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: "60",
};

module.exports = nextConfig;
