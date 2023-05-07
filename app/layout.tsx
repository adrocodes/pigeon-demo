import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pigeon Demo',
  description: 'Using pigeon to create the same website using multiple CMS platforms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">
            <Link href="/">{metadata.title}</Link>
          </h1>
          <nav>
            <ul className="flex text-sm">
              <li>
                <Link href="/hygraph" className="hover:no-underline underline px-1 transition-colors">Hygraph</Link>
              </li>
              <li>
                <Link href="/datocms" className="hover:no-underline underline px-1 transition-colors">DatoCMS</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
