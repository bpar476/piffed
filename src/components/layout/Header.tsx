import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Button = styled.a`
  font-family: monospace;
  font-size: 1em;

  padding: 5px;
  margin-right: 5px;

  border: ${(props): string => `2px solid ${props.theme.border}`};

  :hover {
    color: ${(props): string => props.theme.secondary};
    cursor: pointer;
  }
`

const HeaderContainer = styled.div`
  min-height: 2em;
  width: 100%;

  flex: 0 0;

  border-bottom: ${(props): string => `0.5px solid ${props.theme.text}`};

  padding-bottom: 5px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`

export type HeaderNavigationButtonProps = {
  /**
   * The text to display on the button
   */
  title: string
  /**
   * The URL the button will link to when clicked
   */
  href: string
}

export type HeaderProps = {
  elements: HeaderNavigationButtonProps[]
}

const HeaderNavigationButton: FunctionComponent<HeaderNavigationButtonProps> = ({ title, href }) => (
  <>
    <Link href={href}>
      <Button>{title}</Button>
    </Link>
  </>
)

export const Header: FunctionComponent<HeaderProps> = ({ elements }) => (
  <HeaderContainer>
    {elements.map((element) => (
      <HeaderNavigationButton key={element.title} {...element} />
    ))}
  </HeaderContainer>
)
