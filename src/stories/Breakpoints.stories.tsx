import { Meta } from '@storybook/react/types-6-0'
import { Title } from '../../dist'
import { useBreakPoints } from '../../dist/hooks/responsive-breakpoints'

export const Breakpoints: React.VFC = () => {
  const breakPoint = useBreakPoints()

  return <Title>{breakPoint}</Title>
}

export default {
  title: 'Piffed/Breakpoints',

  component: Breakpoints,
} as Meta
