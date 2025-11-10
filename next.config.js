/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['images.ctfassets.net', 'images.contentful.com'],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
