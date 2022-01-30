import Head from 'next/head'
import SETTINGS from '@/config/settings'

const { siteTitle } = SETTINGS

type Props = {
  pageTitle?: string
  children?: React.ReactNode
}

export default function Layout({ pageTitle, children }: Props) {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${siteTitle} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  )
}
