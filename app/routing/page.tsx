import Link from "next/link"
import { Metadata } from "next"
import ActiveCheckLink from "./active-check-link"

export const metadata: Metadata = {
  title: 'Routing explanation'
}

export default function Page() {
  return (
    <>
      <h1>Routing</h1>
      <a href='https://nextjs.org/docs/app/building-your-application/routing'>Reference</a>
      <ul>
        <li>
          There is currently both app routing and file based routing
        </li>
        <li>
          Folders define a route segment (delimited by /)
        </li>
        <li>
          A special file of Page.tsx makes it publicly accessible (any that do not have this file are not publicly accessible but can store assets etc)
        </li>
        <li>
          Pages are unique to a route. (Note this is the page for routing/)
        </li>
        <li>
          Routes can be nested e.g. <Link href='routing/nested-route'>Nested Route</Link>
        </li>
        <li>
          Layouts are shared UI between multiple pages. These preserve state on navigation.
        </li>
        <li>A layout.js file should take a children prop which automatically takes a child layout or page</li>
        <li>A template.js is simliar but does not preserve state, and remounts on navigation - e.g. to make use of useEffect</li>
        <li>It is recommended to use layout unless you specifically need the behaviour of template.js</li>
        <li>metadata can be added by exporting a MetaData object (or generateMetadata function): Note the title</li>
        <hr/>
        <h4>Link</h4>
        <li>Next.js router has server-side routing with client-side navigation</li>
        <li>a Link component extends the a tag and is the primary navigation</li>
        <li><Link href={'/routing'}>This is a link to this page</Link></li>
        <li><Link href={`/${true && 'routing'}`}>This is an interpolated link</Link></li>
        <li><ActiveCheckLink path={'/routing'}/></li>
        <li>the scroll=false option can be used when the href is an id to stop the default route segment scrolling
      </ul>
    </>
  )
}
