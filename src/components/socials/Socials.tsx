import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { TwitterSocial, GitHubSocial, ItchSocial, SocialProvidedProps } from './Social'

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
}

export const Socials: FunctionComponent<SocialsProps> = ({ githubProps, itchIoProps, twitterProps }) => {
  if (githubProps || itchIoProps || twitterProps) {
    return (
      <SocialsContainer>
        <SocialsHeader>Socials</SocialsHeader>
        {twitterProps && <TwitterSocial handle={twitterProps.handle} iconUrl={twitterProps.iconUrl} />}
        {githubProps && <GitHubSocial handle={githubProps.handle} iconUrl={githubProps.iconUrl} />}
        {itchIoProps && <ItchSocial handle={itchIoProps.handle} iconUrl={itchIoProps.iconUrl} />}
      </SocialsContainer>
    )
  }
  return null
}
