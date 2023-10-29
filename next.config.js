/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { 
    GO_TEAM_ADDRESS: "0x904B8068f2dCF175D0f93f24C65c710A0b38eF91",
    TEAM_WALLET: "0xcB166b21A499d3AA91C93749D92642432A6036C6",
    NEXT_BUCKET_URL: "https://gnfd-testnet-sp2.bnbchain.org/view/my-test-bucket"
  },
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
