export type BreakPoint = 'smallMobile' | 'largeMobile' | 'SD' | 'HD' | 'QHD' | 'UHD' | 'EightK'

export const breakpoints: Record<BreakPoint, string> = {
  smallMobile: '400px',
  largeMobile: '600px',
  SD: '1300px',
  HD: '2000px',
  QHD: '2800px',
  UHD: '4000px',
  EightK: '8000px',
}
