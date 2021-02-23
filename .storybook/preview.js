import { ThemeProvider } from 'styled-components'

// If you update the theme, make sure you update the background and the "introduction" story
export const theme = {
  name: 'Example theme',
  primary: '#fcba03',
  secondary: '#ba03fc',
  border: '#c790d6',
  link: '#c790d6',
  text: '#edede8',
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
