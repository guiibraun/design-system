import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@gui-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    size: {
      options: ['sm', 'md', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    children: 'H2 Heading',
    size: 'md',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
