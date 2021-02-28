import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Layout, HyperLink, HeaderNavigationButtonProps, PiffedTheme } from '../../dist'

const defaultElements: HeaderNavigationButtonProps[] = [
  {
    title: 'Home',
    href: '/?path=/story/piffed-layout--full-layout',
  },
  {
    title: 'About',
    href: '/?path=/story/piffed-layout--dark-theme',
  },
]

const defaultTheme: PiffedTheme = {
  primary: '#fafce5',
  secondary: '#baffff',
  link: '#22f322',
  border: '#44aacc',
  text: '#484040',
}

const darkTheme: PiffedTheme = {
  primary: '#383b39',
  secondary: '#58f097',
  link: '#4ee9d2',
  border: '#448855',
  text: '#ccffcc',
}

export const BasicLayout: React.VFC = () => (
  <Layout theme={defaultTheme} elements={defaultElements} font="sans-serif">
    <div style={{ padding: '300px 0 500px 0', textAlign: 'center', verticalAlign: 'middle' }}>
      <p>
        The layout provides the bones for your website. You control the buttons that appear in the top navigation. The
        links are{' '}
        <HyperLink external href="https://nextjs.org/docs/api-reference/next/link">
          Next links
        </HyperLink>{' '}
        so they won&apos;t work in this context but will work in your{' '}
        <HyperLink external href="https://nextjs.org">
          Next.js
        </HyperLink>{' '}
        application
      </p>
    </div>
  </Layout>
)

export const DarkTheme: React.VFC = () => (
  <Layout theme={darkTheme} elements={defaultElements} font="monospace">
    <p>
      The layout should be the root element of your{' '}
      <HyperLink href="https://nextjs.org/docs/basic-features/pages" external>
        Next.js page
      </HyperLink>
      . You should provide a theme to the layout. You can use the ScaledFontLayout to make your website scale the root
      font-size based on the display size. This will update all component sizes as they are defined in em units.
    </p>
  </Layout>
)

// TODO Layout with custom font family

export default {
  title: 'Piffed/Layout',

  component: DarkTheme,
} as Meta
