import React, { FunctionComponent, ReactElement } from 'react'
import styled from 'styled-components'

import HyperLink from '../Link'

type SocialBaseProps = {
  title: string
  iconUrl: string
  link: string
}

export type SocialProps = SocialBaseProps & { handle: string }

const SocialIcon = styled.img`
  min-height: 32px;
  min-width: 32px;
  max-height: 32px;
  max-width: 32px;

  margin-right: 5px;
`

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 1em;
`

const SocialLinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 0.9em;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const TwitterSocial: FunctionComponent<{ handle: string }> = ({ handle }) => {
  return <Social title="Twitter" handle={handle} link={`https://twitter.com/${handle}`} iconUrl="/icons/Twitter.png" />
}

export const ItchSocial: FunctionComponent<{ handle: string }> = ({ handle }) => {
  return (
    <Social
      title="Itch.io"
      handle={handle}
      link={`https://${handle.toLowerCase()}.itch.io`}
      iconUrl="/icons/itch.svg"
    />
  )
}

export const GitHubSocial: FunctionComponent<{ handle: string }> = ({ handle }) => {
  return <Social title="GitHub" handle={handle} link={`https://github.com/${handle}`} iconUrl="/icons/GitHub.png" />
}

const Social = ({ title, handle, iconUrl, link }: SocialProps): ReactElement => {
  return (
    <SocialContainer>
      <HyperLink title={title} external href={link}>
        <SocialIcon alt={title} src={iconUrl} />
      </HyperLink>
      <SocialLinkContainer>
        {title}
        <HyperLink title={title} external href={link}>
          {handle}
        </HyperLink>
      </SocialLinkContainer>
    </SocialContainer>
  )
}
