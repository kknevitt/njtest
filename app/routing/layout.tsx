import Link from "next/link"
export default function RoutingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>This heading is part of a nested layout</h2>
      {children}
    </>
  )
}
