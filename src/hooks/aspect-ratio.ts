import { useEffect, useState } from 'react'

export const useScreenScale = (refWidth: number, refHeight: number): { widthRatio: number; heightRatio: number } => {
  const [widthRatio, setWidthRatio] = useState<number>(1)
  const [heightRatio, setHeightRatio] = useState<number>(1)

  useEffect(() => {
    setHeightRatio(calcHeightRatio(refHeight))
    setWidthRatio(calcWidthRatio(refWidth))

    window.onresize = (): void => {
      setHeightRatio(calcHeightRatio(refHeight))
      setWidthRatio(calcWidthRatio(refWidth))
    }
  }, [])

  return {
    widthRatio,
    heightRatio,
  }
}

const calcWidthRatio = (refWidth: number): number => {
  return calculateDimensionRatio(document.documentElement.clientWidth, screen.width, refWidth)
}

const calcHeightRatio = (refHeight: number): number => {
  return calculateDimensionRatio(document.documentElement.clientHeight, screen.height, refHeight)
}

const calculateDimensionRatio = (clientDimension: number, screenDimension: number, reference: number): number => {
  return ((clientDimension / screenDimension) * screenDimension) / reference || 1
}
