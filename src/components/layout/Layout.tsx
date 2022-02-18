import Head from 'next/head'
import { Header } from '@/components'
import SETTINGS from '@/config/settings'

const { siteTitle } = SETTINGS

type Props = {
  pageTitle?: string
  children: React.ReactNode
}

export default function Layout({ pageTitle, children }: Props) {
  return (
    <>
      <Head>
        <title>{pageTitle ? `${siteTitle} | ${siteTitle}` : siteTitle}</title>
      </Head>
      <Header />
      <main className="mt-10">{children}</main>
    </>
  )
}
