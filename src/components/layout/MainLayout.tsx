import React, { FunctionComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Header, HeaderProps } from './Header'
import { ScaledFontSize } from './ScaledFontSize'
import { Footer } from './Footer'
import { PiffedTheme } from '../theme/Theme'

export type LayoutProps = { theme: PiffedTheme; font: string } & HeaderProps

const Background = styled.div<{ font: string }>`
  height: calc(100% - 10px);
  width: calc(100% - 40px);
  padding: 5px 20px 5px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: ${(props): string => props.font};

  background-color: ${(props): string => props.theme.primary};
  color: ${(props): string => props.theme.text};
`

export const Layout: FunctionComponent<LayoutProps> = ({ children, theme, font, elements }) => {
  return (
    <ThemeProvider theme={theme}>
      <Background font={font}>
        <Header elements={elements} />
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
