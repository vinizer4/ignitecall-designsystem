import type { StoryObj, Meta } from '@storybook/react';
import { Box, Text, TextInput, TextInputProps } from '@ignitecall-ui-designsystem/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>User name</Text>
          {Story()}
        </Box>
      )
    },
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type you name',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  }
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  }
};