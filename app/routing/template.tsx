'use client'

import { useEffect } from "react"
export default function RoutingTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    alert('I was triggered by a template, NB: whether the content underneath is rendered yet')
  }, [])  
  return <div>{children}</div>
}
