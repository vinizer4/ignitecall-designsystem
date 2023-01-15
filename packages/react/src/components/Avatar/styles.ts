import { styled } from "../../styles";
import * as Avatar from '@radix-ui/react-avatar';

export const AvatarContainer = styled(Avatar.Root, {
  width: '$12',
  overflow: 'hidden',
  borderRadius: '$full',
  display: 'inline-block',
});

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  color: '$gray800',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',

  svg:{
    width: '$6',
    height: '$6',
  },
});
