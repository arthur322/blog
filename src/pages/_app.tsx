import '../styles/globals.css'
import 'sakura.css/css/sakura-vader.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SETTINGS from '@/config/settings'

const { siteTitle, siteDescription, SEO } = SETTINGS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo title={siteTitle} description={siteDescription} {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
