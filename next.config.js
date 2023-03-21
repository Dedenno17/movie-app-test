/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/M/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pngitem.com',
        pathname: '/pimgs/m/**',
      },
    ],
    domains: ['m.media-amazon.com', 'www.pngitem.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
