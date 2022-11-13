/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['xivapi.com']
  },
  reactStrictMode: false,
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig
