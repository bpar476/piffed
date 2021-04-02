import React, { FunctionComponent, ReactElement } from 'react'
import styled from 'styled-components'
import { HyperLink } from '../Link'

type SocialBaseProps = {
  title: string
  link: string
}

export type SocialProvidedProps = {
  handle: string
  iconUrl: string
}

export type LinkedInProps = SocialProvidedProps & { profileUrl: string }
export type SocialProps = SocialBaseProps & SocialProvidedProps

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
  color: ${(props): string => props.theme.text};

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

export const TwitterSocial: FunctionComponent<SocialProvidedProps> = ({ handle, iconUrl }) => {
  return <Social title="Twitter" handle={handle} link={`https://twitter.com/${handle}`} iconUrl={iconUrl} />
}

export const ItchSocial: FunctionComponent<SocialProvidedProps> = ({ handle, iconUrl }) => {
  return <Social title="Itch.io" handle={handle} link={`https://${handle.toLowerCase()}.itch.io`} iconUrl={iconUrl} />
}

export const GitHubSocial: FunctionComponent<SocialProvidedProps> = ({ handle, iconUrl }) => {
  return <Social title="GitHub" handle={handle} link={`https://github.com/${handle}`} iconUrl={iconUrl} />
}

export const LinkedInSocial: FunctionComponent<LinkedInProps> = ({ handle, iconUrl, profileUrl }) => {
  return <Social title="LinkedIn" handle={handle} link={profileUrl} iconUrl={iconUrl} />
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

export const CustomSocial = Social
