import { Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { Carousel, CarouselItem } from '../../dist/components/Carousel'
import { Paragraph } from '../../dist/components/Content'

const testCarouselItems: CarouselItem[] = [
  {
    title: 'Item 1',
    body: (
      <>
        <Paragraph>I am the first element</Paragraph>
        <Paragraph>And I have lots of content</Paragraph>
      </>
    ),
    backgroundImage: 'https://momentousinstitute.org/assets/site/blog/clouds.jpg',
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
