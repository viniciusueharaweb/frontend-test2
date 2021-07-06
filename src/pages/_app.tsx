import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '../styles/globalStyles'

import { ThemeProvider } from '../hooks/useTheme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.86" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
