import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project 07',
  description: 'Turn passive video watching into an active, search-driven, practice-oriented learning journey',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen h-full w-full overflow-x-hidden relative">{children}</body>
    </html>
  )
}
