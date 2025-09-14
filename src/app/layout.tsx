import './globals.css'

export const metadata = {
  title: 'Bachelorprosjekt 2025',
  description: 'Bachelor gruppe nettside',
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
