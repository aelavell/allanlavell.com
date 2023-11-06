import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Allan Lavell - Technical Portfolio',
  description: 'Allan Lavell is a creative technologist from Nova Scotia, Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-white to-pink-400 ">{children}</body>
    </html>
  )
}
