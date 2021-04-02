import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Paragraph } from '../Content'
import { HyperLink } from '../Link'

const FooterContainer = styled.div`
  flex: 0 0;

  border-top: ${(props): string => `0.5px solid ${props.theme.text}`};

  width: 100%;

  font-size: 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-top: auto;
`

export const Footer: FunctionComponent<{ footerContent?: React.ReactElement }> = ({ footerContent }) => {
  return (
    <FooterContainer>
      {footerContent}
      <Paragraph>
        Icons made by{' '}
        <HyperLink href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </HyperLink>{' '}
        from{' '}
        <HyperLink href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </HyperLink>
      </Paragraph>
    </FooterContainer>
  )
}
