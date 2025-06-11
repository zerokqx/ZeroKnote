import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/themes/light';

export const borderCss = recipe({
  base: {
    borderColor: vars.colors.primary[1],
    borderWidth: 1,
  },
  variants: {
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
