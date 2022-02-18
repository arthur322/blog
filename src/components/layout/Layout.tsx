import { NextSeo } from 'next-seo'
import { Header } from '@/components'

type Props = {
  children: React.ReactNode
  pageTitle?: string
  pageDescription?: string
}

export default function Layout({
  children,
  pageTitle,
  pageDescription,
}: Props) {
  return (
    <>
      <Header />
      <NextSeo title={pageTitle} description={pageDescription} />
      <main className="mt-10">{children}</main>
    </>
  )
}
