import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Card, LargeCard } from '../../dist'

export const Normal: React.VFC = () => (
  <Card
    content="Small cards are good when you want to put many small pieces of information in view at the same time. It only accepts a string for the content. You can specify an external link to be loaded when clicking the card. You can also choose the image shown and its alt text."
    title="This is a small card"
    thumbnailUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
    thumbnailAlt="A computer monitor with code on it"
    externalLinkUrl="/"
  />
)

export const Large: React.VFC = () => (
  <LargeCard
    title="This is a large card"
    content="Large cards have a larger image and generally occupy full viewport width. They are good for very important information. You can put any valid react element as the content. This makes it highly flexible"
    thumbnailUrl="https://images.unsplash.com/photo-1599585113438-291af1a8d1db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1937&q=80"
    thumbnailAlt="Two people working on a whiteboard with marker and post-it notes"
  />
)

export default {
  title: 'Piffed/Card',

  component: Normal,
} as Meta
