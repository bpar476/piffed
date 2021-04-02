import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { GitHubSocial, ItchSocial, LinkedInProps, LinkedInSocial, SocialProvidedProps, TwitterSocial } from './Social'

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  color: ${(props): string => `${props.theme.text}`};

  @media screen and (max-width: 800px) {
    flex-direction: row;
  }
`

const SocialsHeader = styled.h3`
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export type SocialsProps = {
  githubProps?: SocialProvidedProps
  itchIoProps?: SocialProvidedProps
  twitterProps?: SocialProvidedProps
  linkedInProps?: LinkedInProps
}

export const Socials: FunctionComponent<SocialsProps> = ({ githubProps, itchIoProps, twitterProps, linkedInProps }) => {
  if (githubProps || itchIoProps || twitterProps || linkedInProps) {
    return (
      <SocialsContainer>
        <SocialsHeader>Socials</SocialsHeader>
        {twitterProps && <TwitterSocial {...twitterProps} />}
        {githubProps && <GitHubSocial {...githubProps} />}
        {itchIoProps && <ItchSocial {...itchIoProps} />}
        {linkedInProps && <LinkedInSocial {...linkedInProps} />}
      </SocialsContainer>
    )
  }
  return null
}
