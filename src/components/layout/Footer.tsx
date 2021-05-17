import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

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
  return <FooterContainer>{footerContent}</FooterContainer>
}
