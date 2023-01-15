import type { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@ignitecall-ui-designsystem/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/erickmarquesc.png',
    alt: 'Avatar'
  },
  argTypes: {
    src: {
      description: 'Url da imagem',
      control: {
        type: 'text',
      },
    },
    alt:{
      description:'Texto alternativo',
    }
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
};
