import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/themes/light';

export const borderCss = recipe({
  base: {
    borderColor: vars.colors.primary[1],
    borderWidth: 1,
  },
  variants: {
    width: {
      xs: {
        borderWidth: 5,
      },
      sm: {
        borderWidth: 10,
      },
      md: {
        borderWidth: 30,
      },
      lg: {
        borderWidth: 35,
      },
      xl: {
        borderWidth: 40,
      },
    },
    borderStyle: {
      solid: {
        borderStyle: 'solid',
      },
      dashed: {
        borderStyle: 'dashed',
      },
      dotted: {
        borderStyle: 'dotted',
      },
      double: {
        borderStyle: 'double',
      },
      none: {
        borderStyle: 'none',
      },
    },
  },
  defaultVariants: {
    borderStyle: 'solid',
  },
});
