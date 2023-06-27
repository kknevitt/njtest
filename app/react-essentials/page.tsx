import ExampleClientComponent from "./example-client-component";
import ExampleServerComponent from "./example-server-component";

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>

      <h3>Client Component</h3>
      <a target='_blank' href='https://nextjs.org/docs/getting-started/react-essentials#client-components'>Reference</a>
      <p>Client components use state etc and are rendered by the client</p>
      <ExampleClientComponent>
      </ExampleClientComponent>
      <hr />

      <h3>Server Component</h3>
      <a target='_blank' href='https://nextjs.org/docs/getting-started/react-essentials#server-components'>Reference</a>
      <p>Server components do not have interactivity and are rendered immediately by the server</p>
      <p>Async data can be found at this point and rendered</p>
      <ExampleServerComponent />
      <hr />

      <h3>Client Component with leaving a hole for Server component</h3>
      <a target='_blank' href='https://nextjs.org/docs/getting-started/react-essentials#recommended-pattern-passing-server-components-to-client-components-as-props'>Reference</a>
      <ExampleClientComponent>
        <ExampleServerComponent />
      </ExampleClientComponent>
      <hr />

      <h3>Commented out attempt of client component using server code</h3>
      <a target='_blank' href='https://nextjs.org/docs/getting-started/react-essentials#keeping-server-only-code-out-of-client-components-poisoning'>Reference</a>
      <p>the server-only package can be used to ensure that server code does not make its way into client components aka Poisoning</p>

      {/* <ExampleClientComponentWithAttemptedServerCode/> */}
      <hr />

      <h3>Use in 3rd party libraries</h3>
      <a target='_blank' href='https://nextjs.org/docs/getting-started/react-essentials#third-party-packages'>Reference</a>
      <p>Note that 3rd party components might be using state etc (e.g. context providers) that you might want to use in server components that will result in an error</p>
      <p>Would need to wrap these components and mark them as client components (use client)</p>
    </>
  )
}
