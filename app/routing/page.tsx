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
        <li>the scroll=false option can be used when the href is an id to stop the default route segment scrolling</li>
        <hr />
        <h4>Route Groups</h4>
        <li>What happens if you mark a folder as a route group?</li>
        <li>What are 2 use cases for route groups?</li>
        <li>What is the convention for naming a route group folder?</li>
        <li><Link href='/routing/inner-route-group-example'>Example of page within a nested group</Link></li>
        <li>How could you opt to have specific route share the same layout?</li>
        <li><Link href='/routing/other-route-group-example'>Example of shared layout</Link></li>
        <li>What happens if you have two or more route groups that resolve to the same url?</li>
        <hr />
        <h4>Dynamic Routes</h4>
        <li>How do you mark a route as being dynamic?</li>
        <li><Link href={`/routing/slugs/i-am-a-snail`}>Example of dynamic routing - where slug could be dynamic</Link></li>
        <li>How can you generate static routes at build time?</li>
        <li>What is the benefit of this?</li>
        <li>What are catch-all-segments?</li>
        <li><Link href='routing/catch-all-params/1/2/3/4/5'>Example catch-all-segment</Link></li>
      </ul>
    </>
  )
}
