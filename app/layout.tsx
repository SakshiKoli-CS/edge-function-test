export const metadata = {
  title: 'Edge Function Test',
  description: 'Testing Contentstack Launch Edge Functions',
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

