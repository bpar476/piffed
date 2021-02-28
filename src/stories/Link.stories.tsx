import { Meta } from '@storybook/react/types-6-0'
import { Paragraph } from '../../dist/components/Content'
import { HyperLink } from '../../dist/components/Link'

export const Links: React.VFC = () => (
  <Paragraph>
    You can use <HyperLink href="www.google.com">Hyperlink components</HyperLink> to link to external pages such as
    blogs, articles, or videos
  </Paragraph>
)

export default {
  title: 'Piffed/Links',

  component: Links,
} as Meta
