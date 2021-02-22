import styled from 'styled-components'
import React, { FunctionComponent } from 'react'

const Anchor = styled.a`
  color: ${(props): string => props.theme.link};
  &:hover {
    color: ${(props): string => props.theme.border};
  }
`

export type HyperLinkProps = {
  href: string
  external?: boolean
  title?: string
}

const HyperLink: FunctionComponent<HyperLinkProps> = ({ href, title, external, children }) => {
  return external ? (
    <Anchor href={href} target="__blank" rel="noreferrer noopener" title={title || href}>
      {children}
    </Anchor>
  ) : (
    <Anchor href={href}>{children}</Anchor>
  )
}

export default HyperLink
