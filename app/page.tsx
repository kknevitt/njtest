import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>EntryPoint</h1>
      <ul>
        <li><Link href='react-essentials'>React Essentials</Link></li>
        <li><Link href='routing'>Routing</Link></li>
      </ul>
    </>
  )
}
