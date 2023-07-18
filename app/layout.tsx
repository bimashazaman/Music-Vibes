import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Sidebar from '@/components/partials/Sidebar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music Vibes',
  description:
    'Music Vibes is a music streaming service. It is a work in progress. Please check back later for more updates.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Sidebar>
          <main className='flex flex-col min-h-screen'>
            <div className='flex-grow'>{children}</div>
          </main>
        </Sidebar>
      </body>
    </html>
  )
}
