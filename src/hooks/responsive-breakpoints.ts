import { useEffect, useState } from 'react'
import { BreakPoint, breakpoints } from '../breakpoints'

export const useBreakPoints = (): BreakPoint => {
  const [breakpoint, setBreakpoint] = useState<BreakPoint>()

  const updateBreakpoint = () => {
    const breakpoint = Object.entries(breakpoints)
      .filter(([, v]) => window.matchMedia(`(max-width: ${v})`).matches)
      .map(([k]) => k)[0] as BreakPoint

    setBreakpoint(breakpoint)
  }

  useEffect(() => {
    updateBreakpoint()

    window.addEventListener('resize', updateBreakpoint)
  }, [])

  return breakpoint || 'largeMobile'
}
