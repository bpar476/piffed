import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../breakpoints'
import {
  EmailSocial,
  GitHubSocial,
  ItchSocial,
  LinkedInProps,
  LinkedInSocial,
  SocialProvidedProps,
  TwitterSocial,
} from './Social'

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  color: ${(props): string => `${props.theme.text}`};

  @media screen and (max-width: ${breakpoints.largeMobile}) {
    flex-direction: row;
  }
`

const SocialsHeader = styled.h3`
  @media screen and (max-width: ${breakpoints.largeMobile}) {
    display: none;
  }
`

export type SocialsProps = {
  githubProps?: SocialProvidedProps
  itchIoProps?: SocialProvidedProps
  twitterProps?: SocialProvidedProps
  linkedInProps?: LinkedInProps
  mailProps?: SocialProvidedProps
}

export const Socials: FunctionComponent<SocialsProps> = ({
  githubProps,
  itchIoProps,
  mailProps,
  twitterProps,
  linkedInProps,
}) => {
  if (githubProps || itchIoProps || twitterProps || linkedInProps || mailProps) {
    return (
      <SocialsContainer>
        <SocialsHeader>Socials</SocialsHeader>
        {twitterProps && <TwitterSocial {...twitterProps} />}
        {githubProps && <GitHubSocial {...githubProps} />}
        {itchIoProps && <ItchSocial {...itchIoProps} />}
        {linkedInProps && <LinkedInSocial {...linkedInProps} />}
        {mailProps && <EmailSocial {...mailProps} />}
      </SocialsContainer>
    )
  }
  return null
}
