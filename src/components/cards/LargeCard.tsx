import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { BaseCardProps } from './Card'

// Lage card is different from card in the way it renders. They don't render well side by side and on mobile the image
// renders above the content. The Card title is also above the image and the content.
export const LargeCard: FunctionComponent<BaseCardProps> = ({ content, thumbnailAlt, thumbnailUrl, title }) => {
  return (
    <LargeCardContainer>
      <LargeCardTitle>{title}</LargeCardTitle>
      <Row>
        <LargeCardThumbnail src={thumbnailUrl} alt={thumbnailAlt} />
        <LargeCardTextContainer>{content}</LargeCardTextContainer>
      </Row>
    </LargeCardContainer>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

const LargeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;

  @media screen and (max-width: 800px) {
    max-width: 100%;
    align-items: center;
  }

  padding-bottom: 20px;
  margin-bottom: 20px;

  border-bottom: ${(props): string => `0.5px solid ${props.theme.text}`};
`
const LargeCardThumbnail = styled.img`
  object-fit: cover;
  height: 240px;
  width: 240px;
  padding: 5px;

  margin-bottom: 5px;

  border: ${(props): string => `3px solid ${props.theme.border}`};
`

const LargeCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;

  color: ${(props): string => props.theme.text};
`

const LargeCardTitle = styled.h3`
  margin: 0 0 5px 0;
  font-style: italic;
  color: ${(props): string => props.theme.text};
`
