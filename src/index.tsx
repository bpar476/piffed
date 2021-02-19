import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

export const Hello: FunctionComponent = () => {
  return <Container>Hello, world</Container>
}
