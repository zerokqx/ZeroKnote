import { style } from '@vanilla-extract/css';

import { controlGap } from '@/styles/global.css.ts';
import { direction, flex, justify } from '@/styles/recipes/flex.css.ts';

export default style([
  flex,
  direction.row,
  justify.end,
  {
    gap: controlGap,
  },
]);
