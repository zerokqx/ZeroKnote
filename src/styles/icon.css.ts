import { style } from '@vanilla-extract/css';

import { vars } from './themes';

export const iconStyle = style({
  width: 16,
  height: 'auto',
  fill: vars.colors.primary[9],
  aspectRatio: '1 / 1',
});
