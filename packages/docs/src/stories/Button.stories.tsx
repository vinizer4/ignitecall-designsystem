import type { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@ignitecall-ui-designsystem/react';
import { ArrowRight } from 'phosphor-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Sende',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    children:{
      name: "Texto interno",
      description: 'Texto interno do botão',
    },
    size: {
      name: "Tamanho (size)",
      description: 'Opções de tamanho do botão',
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      name: "Variação de Tipo",
      description: 'Variante de tipo do botão',
      options: ['primary', 'secundary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled:{
      name: "Desabilitado (disabled)",
      description: 'Estado de indicação de botão desabilitado',
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {};

export const Secundary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secundary',
    children: 'create new',
  },
};

export const tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Smal: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    )
  },
};

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
