import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TURN Lifestyle - Premium Apparel',
  description: 'Discover premium apparel with minimalist design. Based in Bangalore, India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
