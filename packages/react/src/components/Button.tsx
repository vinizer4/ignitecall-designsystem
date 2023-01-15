import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
  all: 'unset',
  minWidth: 120,
  fontSize: '$sm',
  padding: '0 $4',
  textAlign: 'center',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  boxSizing: 'border-box',

  gap: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',
  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secundary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$ignite300',
        },

        '&:disabled': {
          color: '$gray200',
          backgroundColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
          background: '$ignite300',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType,
};

Button.displayName = 'Button';