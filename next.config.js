/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['images.ctfassets.net', 'images.contentful.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // Optimize production builds
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
