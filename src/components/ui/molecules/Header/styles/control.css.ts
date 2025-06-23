import { style } from '@vanilla-extract/css';

import { direction, flex, justify } from '@styles/recipes';

import { controlGap } from '../../../../../global.css.ts';

export default style([
  flex,
  direction.row,
  justify.end,
  {
    gap: controlGap,
  },
]);
