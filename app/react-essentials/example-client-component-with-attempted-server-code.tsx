'use client'
import { getData } from "../lib/data"

export default async function ExampleClientComponentWithAttemptedServerCode() {
  const failedFetch = await getData();
  return (
    <>
     <p>This should never render</p>
      {failedFetch.status}
    </>
  )
}
