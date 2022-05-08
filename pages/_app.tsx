import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MoralisProvider} from 'react-moralis'
import { constants } from 'buffer'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <Component {...pageProps}    />
    </MoralisProvider>
     
     
    )
}

export default MyApp
