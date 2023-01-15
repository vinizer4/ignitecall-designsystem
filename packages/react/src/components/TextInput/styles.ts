import { styled } from "../../styles";

export const TextInputContainer = styled('div', {
  display: 'flex',
  padding: '$3 $4',
  borderRadius: '$sm',
  alignItems: 'baseline',
  boxSizing: 'border-box',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',

  '&:has(input:focos)':{
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)':{
    opacity: 0.5,
    cursor: 'not-allowed',
  },

});

export const Prefix = styled('span',{
  fontSize:'$sm',
  color: '$gray400',
  fontWeight: '$regular',
  fontFamily: '$default',
});

export const Input = styled('input',{
  border: 0,
  width: '100%',
  fontSize:'$sm',
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$regular',
  background: 'transparent',

  '&:focus':{
    outline: 0,
  },

  '&:disabled':{
    cursor: 'not-allowed',
  },

  '$:placeholder':{
    color: '$gray400',
  },
});
