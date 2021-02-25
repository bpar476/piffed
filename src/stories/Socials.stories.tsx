import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { TwitterSocial, ItchSocial, GitHubSocial, Socials } from '../../dist'
import { SocialProvidedProps } from '../../dist/components/socials/Social'

const githubProps: SocialProvidedProps = {
  handle: 'Developer789',
  iconUrl: '/GitHub.png',
}

const twitterProps: SocialProvidedProps = {
  handle: 'Tweeter1213',
  iconUrl: '/Twitter.png',
}

const itchProps: SocialProvidedProps = {
  handle: 'GameMaker246',
  iconUrl: '/itch.svg',
}

export const SocialsGroup: React.VFC = () => (
  <>
    <em>
      For exposing your social media presence there are a number of different components you can use. There is also a
      meta-component which will display all provided socials in a group with a header as shown below. To use social
      components, you&apos;ll need to provide a path to the icons on your website, piffed does not provide static
      assets.
    </em>
    <Socials githubProps={githubProps} twitterProps={twitterProps} itchIoProps={itchProps} />
  </>
)

export const Twitter: React.VFC = () => <TwitterSocial {...twitterProps} />

export const ItchIo: React.VFC = () => <ItchSocial {...itchProps} />

export const GitHub: React.VFC = () => <GitHubSocial {...githubProps} />

export default {
  title: 'Piffed/Social',

  component: SocialsGroup,
} as Meta