import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { CardClickAnalyticsEventChannel } from '../analytics/analytics'
import { cardClick } from '../analytics/events'
import { ExternalLinkIcon } from './ExternalLinkIcon'

export type BaseCardProps = {
  content: string | ReactNode
  thumbnailAlt?: string
  thumbnailUrl?: string
  title: string
}

export type CardProps = {
  externalLinkUrl: string
} & BaseCardProps

const analyticsFacade = new CardClickAnalyticsEventChannel()

export const Card = ({ externalLinkUrl, thumbnailUrl, thumbnailAlt, title, content }: CardProps): ReactElement => {
  return (
    <CardContainer>
      <CardLink
        onClick={(): void => analyticsFacade.sendEvent(cardClick(title))}
        target="__blank"
        rel="noreferrer noopener"
        href={externalLinkUrl}
      >
        <CardThumbnail src={thumbnailUrl} alt={thumbnailAlt} />
        <CardSummary>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <ExternalLinkIcon />
          </CardHeader>
          <CardContent>{content}</CardContent>
        </CardSummary>
      </CardLink>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  height: 8em;
  width: 30em;
  max-width: 100%;

  background-color: ${(props): string => `${props.theme.secondary}`};
  color: ${(props): string => `${props.theme.text}`};

  border: ${(props): string => `2px solid ${props.theme.border}`};

  margin-bottom: 60px;
  margin-right: 20px;

  :last-child {
    margin-bottom: 20px;
    margin-right: 0;
  }

  @media screen and (max-width: 800px) {
    margin-right: 0;
  }
`

const CardThumbnail = styled.img`
  object-fit: cover;
  height: 8em;
  width: 8em;

  max-width: 8em;
  flex: 0 0 8em;
`

const CardSummary = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;

  padding: 2px 8px 0 8px;
`

const CardHeader = styled.div`
  height: 0.8em;
  display: flex;
  justify-content: space-between;
`

const CardTitle = styled.h6`
  margin: 0;
  font-size: 0.8em;
`

const CardContent = styled.p`
  font-size: 0.6em;

  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;
`

const CardLink = styled.a`
  color: inherit;
  text-decoration: inherit;
  display: inherit;
  max-width: 100%;

  :active,
  :focus,
  :visited,
  :active {
    outline: 0;
    border: none;
    -moz-outline-style: none;
    outline-style: none;
    text-decoration: none;
  }
`
