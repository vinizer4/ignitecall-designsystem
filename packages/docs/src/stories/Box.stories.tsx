import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps, Text } from '@ignitecall-ui-designsystem/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando elemento Box</Text>
      </>
    ),
    backgroundColor: '#202024', 
  },
  argTypes: {
    children: {
      description: 'Esse elemento é apenas o box',
      control: {
        type: null,
      },
    },
    backgroundColor: {
      description: 'Cor de fundo do box | variavel $gray800',
      control:{
        type: 'color'
      }
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {};
