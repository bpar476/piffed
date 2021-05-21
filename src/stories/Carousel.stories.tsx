import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { Carousel, CarouselItem } from '../../dist/components/carousel/Carousel'
import { Paragraph } from '../../dist/components/Content'

const testCarouselItems: CarouselItem[] = [
  {
    title: 'Big Brother Australia',
    body: (
      <>
        <Paragraph style={{ color: 'black', fontWeight: 'lighter' }}>
          Big Brother Australia is one of Australias top rated reality TV shows. At Endemol Shine we revitalised the
          format to critical acclaim. My role on the show was as an assistant editor where I also did assembly for 10
          episodes
        </Paragraph>
      </>
    ),
    backgroundImage:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=webaliser-_TPTXZd9mOo-unsplash.jpg&w=1920',
  },
  {
    title: 'Item 2',
    body: (
      <>
        <Paragraph>I am the second element</Paragraph>
        <Paragraph>I also have content</Paragraph>
      </>
    ),
    backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Rainbow-diagram-ROYGBIV.svg',
  },
  {
    title: 'Item 3',
    body: (
      <>
        <Paragraph>I am the third element</Paragraph>
        <Paragraph>
          I am empty
          <br />
          ... or am I
        </Paragraph>
      </>
    ),
    backgroundImage:
      'https://cdn2.psychologytoday.com/assets/styles/crop_3_2_600x400/public/field_blog_entry_teaser_image/2021-01/spiral-hypnosis-myths-psychology-emamzadeh.png?itok=jSd6V3KX',
  },
]

export const CarouselStory: React.VFC = () => <Carousel items={testCarouselItems} />

export default {
  title: 'Piffed/Carousel',

  component: CarouselStory,
} as Meta
