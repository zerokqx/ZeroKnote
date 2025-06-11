import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/themes/light';

export const iconStyle = style({
  width: 16,
  height: 'auto',
  fill: vars.colors.primary[10],
  aspectRatio: '1 / 1',
});
