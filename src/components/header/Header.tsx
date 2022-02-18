import SETTINGS from '@/config/settings'
import Link from 'next/link'

type MenuItem = typeof SETTINGS.headerLinks

type Props = {
  menuItems?: MenuItem
}

const isExternal = (url: string) => url.includes('http')

export default function Header({ menuItems = SETTINGS.headerLinks }: Props) {
  return (
    <header className="mt-8">
      <span className="font-bold font-mono site-title text-7xl tracking-widest">
        Atur
      </span>
      <nav>
        <ul className="flex p-0 my-5">
          {menuItems.map((item) => (
            <li key={item.url} className="mr-5 m-0">
              {isExternal(item.url) ? (
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link href={item.url}>
                  <a>{item.label}</a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
