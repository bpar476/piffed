import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { TwitterSocial, GitHubSocial, ItchSocial } from './Social'

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;

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
  githubHandle?: string
  itchIoHandle?: string
  twitterHandle?: string
}

export const Socials: FunctionComponent<SocialsProps> = ({ githubHandle, itchIoHandle, twitterHandle }) => {
  if (githubHandle || itchIoHandle || twitterHandle) {
    return (
      <SocialsContainer>
        <SocialsHeader>Socials</SocialsHeader>
        {twitterHandle && <TwitterSocial handle={twitterHandle} />}
        {githubHandle && <GitHubSocial handle={githubHandle} />}
        {itchIoHandle && <ItchSocial handle={itchIoHandle} />}
      </SocialsContainer>
    )
  }
  return null
}
