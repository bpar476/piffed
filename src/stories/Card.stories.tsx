import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Card } from '../../dist'

export const Normal: React.VFC = () => (
  <Card
    content="Storybook is a great tool for acceptance testing a component libarary, but how exactly do you set it up? In this essay I aim to explain the value of storybook for acceptance testing component libraries"
    title="Storybook for component library acceptance testing"
    thumbnailUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
    thumbnailAlt="A computer monitor with code on it"
    externalLinkUrl="/"
  />
)

export default {
  title: 'Piffed/Card',

  component: Card,
} as Meta
