import '@/styles/globals.css'

import merge from 'lodash.merge'
import '@rainbow-me/rainbowkit/styles.css';

import { RainbowKitProvider, Theme, getDefaultWallets, midnightTheme } from '@rainbow-me/rainbowkit'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { polygonMumbai } from '@wagmi/core/chains'
import { WalletsContext } from '@/context/wallets/walletsContext';
import { useState } from 'react';
import { IWalletsContext, Wallets } from '@/context/wallets/iWalletsContext';
import { ITeamWalletContext } from '@/context/teamWallet/iTeamWalletContext';
import { TeamWalletContext } from '@/context/teamWallet/teamWalletContext';
import { WalletAssetsInfos } from '@/utils/goTeam';
import { IAssetOnFocusContext } from '@/context/assetOnFocus/iAssetOnFocusContext';
import { AssetOnFocusContext } from '@/context/assetOnFocus/assetOnFocusContext';

const projectId = '62c5cdca62176564fcac7632e68a90a6'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY!})],
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
  const [walletsContext, setWalletsContext] = useState<IWalletsContext>({
    wallets: null,
    handleWalletsContext: handleWalletsContext
  })

  const [teamWalletContext, setTeamWalletContext] = useState<ITeamWalletContext>({
    teamWallet: null,
    handleTeamWalletContext: handleTeamWalletContext
  })

  const [assetOnFocusContext, setAssetOnFocusContext] = useState<IAssetOnFocusContext>({
    asset: null,
    handleAssetOnFocusContext: handleAssetOnFocusContext
  })

  function handleWalletsContext(value: Wallets | null) {
    setWalletsContext({
      wallets: value,
      handleWalletsContext: handleWalletsContext
    })
  }

  function handleTeamWalletContext(value: `0x${string}` | null) {
    setTeamWalletContext({
      teamWallet: value,
      handleTeamWalletContext: handleTeamWalletContext
    })
  }

  function handleAssetOnFocusContext(asset: WalletAssetsInfos | null) {
    setAssetOnFocusContext({
      asset: asset,
      handleAssetOnFocusContext: handleAssetOnFocusContext
    })
  }

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <WalletsContext.Provider value={walletsContext}>
          <TeamWalletContext.Provider value={teamWalletContext}>
            <AssetOnFocusContext.Provider value={assetOnFocusContext}>
              <Component {...pageProps} />
            </AssetOnFocusContext.Provider>
          </TeamWalletContext.Provider>
        </WalletsContext.Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
