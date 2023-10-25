import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zodiac',
  description: 'Zodiac Application with fansy animation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='primary-background w-screen h-screen overflow-x-hidden'>{children}</body>
    </html>
  )
}
