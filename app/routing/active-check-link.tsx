'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
export default function ActiveCheckLink({path}) {
  const pathname = usePathname()
  const isActive = pathname === path;
  return(
    <Link href={path}>This is a link with an active check - Currently on {path} ? : {isActive.toString()}</Link>
  )
}
