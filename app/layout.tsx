import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Which LedgerLift Product Is Right for You?',
  description: 'Find your financial system in 30 seconds. Interactive product selector for LedgerLift Studio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
