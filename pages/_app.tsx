/* eslint-disable @next/next/inline-script-id */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container from '../components/Container'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-YDNNH0V5G9`}
      />

      <Script strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', G-YDNNH0V5G9);
      `}
      </Script>

      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
