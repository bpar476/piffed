import { Meta } from '@storybook/react/types-6-0'
import { Paragraph, Title } from '../../dist/components/Content'

export const Paragraphs: React.VFC = () => (
  <Paragraph>This is a Paragraph. It should be used for most body text in your website.</Paragraph>
)

export const Titles: React.VFC = () => <Title>This is a Title. You should use it for page headings.</Title>

export default {
  title: 'Piffed/Content',

  component: Paragraphs,
} as Meta
