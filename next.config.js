/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  // Uncomment for GitHub Pages deployment
  // output: 'export',
  // basePath: '/AMO_OFFICIAL',
  // assetPrefix: '/AMO_OFFICIAL',
};

module.exports = nextConfig;
