import React from 'react'
import { GitHubSocial, ItchSocial, LinkedInSocial, Socials, TwitterSocial } from '../../dist'
import { EmailSocial, LinkedInProps, SocialProvidedProps } from '../../dist/components/socials/Social'

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

const linkedInProps: LinkedInProps = {
  handle: 'Ben Partridge',
  profileUrl: 'https://www.linkedin.com/in/bpar476/',
  iconUrl: '/LinkedIn.png',
}

const emailprops: SocialProvidedProps = {
  handle: 'ben.partridge249@gmail.com',
  iconUrl: '/send-email.png',
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

export const LinkedIn: React.VFC = () => <LinkedInSocial {...linkedInProps} />

export const Email: React.VFC = () => <EmailSocial {...emailprops} />

export default {
  title: 'Piffed/Social',

  component: SocialsGroup,
} as Meta
