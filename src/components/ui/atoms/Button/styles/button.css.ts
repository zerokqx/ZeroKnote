import { rem } from '@mantine/core';
import { style } from '@vanilla-extract/css';

import { borderCss, flex, items, justify } from '@styles/recipes';
import { vars } from '@styles/themes';

import { buttonSize } from './_variables.css.ts';

export default style([
  flex,
  items.center,
  justify.center,
  borderCss(),
  {
    vars: {
      [buttonSize]: rem(36),
    },
    minHeight: buttonSize,
    minWidth: buttonSize,
    borderRadius: vars.radius.xs,
    transition: '0.1s ease',
    backgroundColor: vars.colors.primary[0],
    selectors: {
      '&:active': {
        backgroundColor: vars.colors.primary[1],
        translate: `0 ${rem(2)}`,
      },
    },
  },
]);
