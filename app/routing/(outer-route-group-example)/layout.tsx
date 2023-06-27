import Link from "next/link"
export default function OuterRouteGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>This layout is shared amongst route group</h2>
      {children}
    </>
  )
}
