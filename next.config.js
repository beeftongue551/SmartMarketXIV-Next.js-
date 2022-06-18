/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['xivapi.com']
  },
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig
