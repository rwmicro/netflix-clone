/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**/**',
      },
      {
        hostname: 'm.media-amazon.com',
      }
    ],
  },
};

module.exports = nextConfig;
