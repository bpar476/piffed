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

const Header: FunctionComponent = () => (
  <HeaderContainer>
    <Link href="/">
      <Button>Home</Button>
    </Link>
    <Link href="/about">
      <Button>About</Button>
    </Link>
    <Link href="/blog">
      <Button>Blog</Button>
    </Link>
    <Link href="/projects">
      <Button>Projects</Button>
    </Link>
  </HeaderContainer>
)

export default Header
