import React, { FunctionComponent, useEffect, useState } from 'react'
import { breakpoints } from '../../breakpoints'

const resolutionToFontSizes = [
  {
    query: breakpoints.smallMobile,
    fontSize: 20,
  },
  {
    query: breakpoints.largeMobile,
    fontSize: 20,
  },
  {
    query: breakpoints.SD,
    fontSize: 16,
  },
  {
    query: breakpoints.HD,
    fontSize: 24,
  },
  {
    query: breakpoints.QHD,
    fontSize: 28,
  },
  {
    query: breakpoints.UHD,
    fontSize: 36,
  },
  {
    query: breakpoints.EightK,
    fontSize: 42,
  },
]

export const ScaledFontSize: FunctionComponent = (props) => {
  const [fontSize, setFontSize] = useState<number>(16)
  const [queryingFontSize, setQueryingFontSize] = useState<boolean>(true)

  const updateFontSize = (): void => {
    const match = resolutionToFontSizes.find((entry) => window.matchMedia(`(max-width: ${entry.query})`).matches)

    setFontSize(match?.fontSize || fontSize)
    setQueryingFontSize(false)
  }

  useEffect(() => {
    window.onresize = (): void => updateFontSize()
    updateFontSize()
  }, [])

  return queryingFontSize ? null : <div style={{ fontSize, width: '100%', height: '100%' }}>{props.children}</div>
}
