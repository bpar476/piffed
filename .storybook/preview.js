import { ThemeProvider } from 'styled-components'

// If you update the theme, make sure you update the background and the "introduction" story
export const theme = {
  name: 'Example theme',
  primary: '#98C1D9',
  secondary: '#3D5A80',
  border: '#EE6C4D',
  link: '#EE6C4D',
  text: '#E0FBFC',
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'Theme',
    values: [
      {
        name: 'Theme',
        value: theme.primary,
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <div style={{ fontSize: '24px', fontFamily: 'sans-serif' }}>
      <Story />
    </div>
  ),

  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
