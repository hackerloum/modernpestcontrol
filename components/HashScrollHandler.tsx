'use client'

import { useEffect } from 'react'

export default function HashScrollHandler() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`)
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 80
          window.scrollTo({ top: offsetTop, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return null
}


