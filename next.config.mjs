/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true // GitHub Pages doesn't support Next.js image optimization
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/v0-test' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v0-test/' : ''
};

module.exports = nextConfig;
export default nextConfig
