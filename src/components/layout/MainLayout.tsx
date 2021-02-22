import React, { FunctionComponent } from 'react'
import styled, { Theme, ThemeProvider } from 'styled-components'
import Header from './Header'
import { ScaledFontSize } from './ScaledFontSize'
import { Footer } from './Footer'

export type LayoutProps = {
  theme: Theme
}

const Background = styled.div`
  height: calc(100% - 10px);
  width: calc(100% - 40px);
  padding: 5px 20px 5px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: monospace;

  background-color: ${(props): string => props.theme.primary};
  color: ${(props): string => props.theme.text};
`

export const Layout: FunctionComponent<LayoutProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Header />
        {children}
        <Footer />
      </Background>
    </ThemeProvider>
  )
}

export const ScaledFontLayout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <ScaledFontSize>
      <Layout {...props} />
    </ScaledFontSize>
  )
}

export default Layout
