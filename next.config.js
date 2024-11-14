/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: false,
    serverComponentsExternalPackages: false,
  },
  images: {
    domains: ['m.media-amazon.com']
  }
}

module.exports = nextConfig
