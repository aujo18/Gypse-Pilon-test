import '../styles/globals.css'
import '../styles/chrome-bug.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { NextIntlProvider } from 'next-intl'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { Head } from '@components/common'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <NextIntlProvider messages={pageProps.messages}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </NextIntlProvider>
    </>
  )
}
export default MyApp
