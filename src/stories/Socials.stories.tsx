import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { TwitterSocial, ItchSocial, GitHubSocial, Socials } from '../../dist/piffed'

export const SocialsGroup: React.VFC = () => (
  <Socials githubHandle="Developer789" twitterHandle="Tweeter123" itchIoHandle="GameMaker246" />
)

export const Twitter: React.VFC = () => <TwitterSocial handle="Tweeter123" />

export const ItchIo: React.VFC = () => <ItchSocial handle="GameMaker246" />

export const GitHub: React.VFC = () => <GitHubSocial handle="Developer789" />

export default {
  title: 'Piffed/Social',

  component: SocialsGroup,
} as Meta
