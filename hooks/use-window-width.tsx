"use client"

import { useState, useEffect } from 'react'

export function useWindowWidth() {
  const [width, setWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth)

    // Add event listener
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
} 