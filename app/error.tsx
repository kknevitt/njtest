'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

  return (
    <div>
      <h2>An Error happened when trying to use this component</h2>
      <p>Name: {error.name}</p>
    </div>
  )
}
