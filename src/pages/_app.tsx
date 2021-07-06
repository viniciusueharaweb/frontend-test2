import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '../styles/globalStyles'

import { ThemeProvider } from '../hooks/useTheme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.86" />
        <meta
          name="description"
          content="Com o Adiante é possível. Antecipe os recebíveis da sua empresa de forma rápida e segura e obtenha fluxo de caixa ainda hoje. Cadastro simples e 100% online. "
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Adiante S/A</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
