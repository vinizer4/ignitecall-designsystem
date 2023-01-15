import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled('textarea', {
  minHeight: 80,
  color: '$white',
  fontSize: '$sm',
  display: 'flex',
  padding: '$3 $4',
  resize: 'vertical',
  borderRadius: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  alignItems: 'baseline',
  boxSizing: 'border-box',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',

  '&:focos': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> { }

TextArea.displayName = 'TextArea';