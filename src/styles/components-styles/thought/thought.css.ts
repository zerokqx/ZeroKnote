import { style } from '@vanilla-extract/css';

import { borderCss } from '@/styles/recipes/border.css.ts';
import { vars } from '@/styles/themes';

export const thoughtStyle = style([
  borderCss(),
  {
    borderRadius: vars.radius.sm,
    overflow: 'hidden',
    padding: `${vars.spacing.sm} ${vars.spacing.xs} ${vars.spacing.sm} ${vars.spacing.md}`,
    minHeight: '70px',
    maxHeight: '100px',
    height: 'fit-content',
  },
]);
