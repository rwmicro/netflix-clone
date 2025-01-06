/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
