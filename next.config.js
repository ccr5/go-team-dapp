/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gnfd-testnet-sp2.bnbchain.org',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
