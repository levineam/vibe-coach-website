import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibe Coach - Personal AI Coaching for Philadelphia',
  description: 'Weekly guidance on integrating AI into your work and life — so you stay ahead, not lost.',
  keywords: 'AI coaching, personal AI, Philadelphia, AI strategy',
  openGraph: {
    title: 'Vibe Coach - Personal AI Coaching for Philadelphia',
    description: 'Weekly guidance on integrating AI into your work and life — so you stay ahead, not lost.',
    type: 'website',
  },
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
