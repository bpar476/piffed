import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { Paragraph } from '../Content'
import Hyperlink from '../Link'

const FooterContainer = styled.div`
  flex: 0 0;

  border-top: ${(props): string => `0.5px solid ${props.theme.text}`};

  width: 100%;

  font-size: 12px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: auto;
`

export const Footer: FunctionComponent = () => {
  return (
    <FooterContainer>
      <Paragraph>
        Icons made by{' '}
        <Hyperlink href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </Hyperlink>{' '}
        from{' '}
        <Hyperlink href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </Hyperlink>
      </Paragraph>
    </FooterContainer>
  )
}
