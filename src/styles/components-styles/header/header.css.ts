import { keyframes, style } from '@vanilla-extract/css';

import { paddingSyncWithControl } from '@/styles/global.css.ts';
import { borderCss } from '@/styles/recipes';
import { direction, flex, items, justify } from '@/styles/recipes/flex.css.ts';

const expandWidth = keyframes({
  from: { width: '0%' },
  to: { width: '100%' },
});

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
    width: '100%',
    padding: paddingSyncWithControl,
    transition: '0.1s ease-in-out',
    animation: `${expandWidth} 0.5s ease-in-out`, // Применяем анимацию
  },
]);
