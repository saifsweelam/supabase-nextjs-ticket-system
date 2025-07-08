"use client"

import { usePathname } from "next/navigation"

export function useBreadcrumbs() {
  const pathname = usePathname()

  if (!pathname) return []

  const segments = pathname
    .split("/")
    .filter(Boolean) // remove empty strings

  const breadcrumbs = segments.map((segment, index) => {
    const href = segment === "details" ? "#" : ("/" + segments.slice(0, index + 1).join("/"))

    return {
      label: decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase()), // e.g. "my-tickets" → "My Tickets"
      href,
    }
  })

  return breadcrumbs
}
