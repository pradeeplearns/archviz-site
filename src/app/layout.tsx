import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motion & Form | Architectural Visualization',
  description: 'Photorealistic 3D visualizations of architectural designs, bringing spaces to life.',
}

// Add a global rule to ensure images display correctly
export const images = {
  unoptimized: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
