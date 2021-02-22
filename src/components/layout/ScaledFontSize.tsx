import React, { FunctionComponent, useEffect, useState } from 'react'

const resolutionToFontSizes = [
  {
    query: 400,
    fontSize: 20,
  },
  {
    query: 900,
    fontSize: 20,
  },
  {
    query: 1300,
    fontSize: 16,
  },
  {
    query: 2000,
    fontSize: 24,
  },
  {
    query: 2800,
    fontSize: 28,
  },
  {
    query: 4000,
    fontSize: 36,
  },
]

export const ScaledFontSize: FunctionComponent = (props) => {
  const [fontSize, setFontSize] = useState<number>(16)
  const [queryingFontSize, setQueryingFontSize] = useState<boolean>(true)

  const updateFontSize = (): void => {
    const match = resolutionToFontSizes
      .sort((a, b) => a.query - b.query)
      .find((entry) => window.matchMedia(`(max-width: ${entry.query}px)`).matches)

    setFontSize(match?.fontSize || fontSize)
    setQueryingFontSize(false)
  }

  useEffect(() => {
    window.onresize = (): void => updateFontSize()
    updateFontSize()
  }, [])

  return queryingFontSize ? null : <div style={{ fontSize, width: '100%', height: '100%' }}>{props.children}</div>
}
