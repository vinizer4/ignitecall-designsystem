import { Box, Text, MultiStep, MultiStepProps } from '@ignitecall-ui-designsystem/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentSep: 1,
  },
  argTypes:{
    size:{
      name: 'Passos',
      description: 'Quantidade de passos a serem realizados',
    },
    currentSep:{
      name: 'Passos realizados',
      description: 'Quantidade de passos já realizados'
    }
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentSep: 4,
  },
};
