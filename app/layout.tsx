import Link from "next/link"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Link href='/'>Back to root</Link>
        {children}
        </body>
    </html>
  )
}
