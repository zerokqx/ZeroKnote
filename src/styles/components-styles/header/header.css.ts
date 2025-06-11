import { style } from '@vanilla-extract/css';

import { paddingSyncWithControl } from '@/styles/global.css.ts';
import { borderCss } from '@/styles/recipes';
import { direction, flex, items, justify } from '@/styles/recipes/flex.css.ts';

export default style([
  flex,
  direction.row,
  items.center,
  justify.between,
  borderCss(),
  {
    minWidth: 'min-content',
    minHeight: 45,
    maxHeight: 'max-content',
    borderRadius: 10,
    padding: paddingSyncWithControl,
    transition: '0.1s ease-in-out',
  },
]);
