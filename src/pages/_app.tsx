import '@/styles/globals.css'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css';

import { RainbowKitProvider, Theme, getDefaultWallets, midnightTheme } from '@rainbow-me/rainbowkit'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { polygonMumbai } from '@wagmi/core/chains'

const projectId = '62c5cdca62176564fcac7632e68a90a6'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({apiKey: process.env.ALCHEMY_KEY!})],
)

const { connectors } = getDefaultWallets({
  appName: 'Custom Dex',
  projectId: projectId!,
  chains
})

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

const myTheme: Theme = merge(midnightTheme(), {
  colors: {
    accentColor: '#079D95',
    accentColorForeground: '#fff',
    connectButtonBackground: "#079D95" 
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
