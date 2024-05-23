/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org',
      },
      {
        hostname: 'm.media-amazon.com',
      }
    ],
  },
};

module.exports = nextConfig;
