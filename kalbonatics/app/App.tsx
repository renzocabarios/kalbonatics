'use client';

import '@rainbow-me/rainbowkit/styles.css';
import merge from 'lodash.merge';
import {
    getDefaultConfig,
    RainbowKitProvider,
    Theme,
    darkTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();
const myTheme = merge(darkTheme(), {

    colors: {
        accentColor: '#E5E5CB',
        accentColorForeground: '#191919',
        actionButtonBorder: '...',
        actionButtonBorderMobile: '...',
        actionButtonSecondaryBackground: '...',
        closeButton: '...',
        closeButtonBackground: '...',
        connectButtonBackground: '...',
        connectButtonBackgroundError: '...',
        connectButtonInnerBackground: '...',
        connectButtonText: '...',
        connectButtonTextError: '...',
        connectionIndicator: '...',
        downloadBottomCardBackground: '...',
        downloadTopCardBackground: '...',
        error: '...',
        generalBorder: '...',
        generalBorderDim: '...',
        menuItemBackground: '...',
        modalBackdrop: '...',
        modalBackground: '...',
        modalBorder: '...',
        modalText: '...',
        modalTextDim: '...',
        modalTextSecondary: '...',
        profileAction: '...',
        profileActionHover: '...',
        profileForeground: '...',
        selectedOptionBorder: '...',
        standby: '...',
    },
    fonts: {
        body: 'Kanit',
    },
    radii: {
        actionButton: '...',
        connectButton: '...',
        menuButton: '...',
        modal: '...',
        modalMobile: '...',
    },
    shadows: {
        connectButton: '...',
        dialog: '...',
        profileDetailsAction: '...',
        selectedOption: '...',
        selectedWallet: '...',
        walletLogo: '...',
    },

} as Theme);


function App({ children }: { children: React.ReactNode }) {
    return <>
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={myTheme}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    </>;
}

export default App;