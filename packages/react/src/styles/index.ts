import { createStitches, defaultThemeMap } from '@stitches/react';
import {
  fonts,
  radii,
  space,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@ignitecall-ui-designsystem/tokens';

export const {
  css,
  theme,
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  themeMap:{
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    fonts: fonts,
    radii: radii,
    space: space,
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
  }
})