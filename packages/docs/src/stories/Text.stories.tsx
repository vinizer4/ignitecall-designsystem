import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignitecall-ui-designsystem/react';

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children: 'Sample Text',
    size: 'md',
  },
  argTypes: {
    children: {
      name: 'Titulo',
      description: 'Texto'
    },
    size: {
      name: 'Tamanho da font',
      description: 'Define o tamanho da fonte',
      options: ['xxs', 'xs', 'sm',
        'md', 'lg', 'xl', '2xl', '4xl', '5xl',
        '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  }
};