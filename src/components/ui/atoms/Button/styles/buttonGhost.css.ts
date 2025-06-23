import { style } from '@vanilla-extract/css';

import buttonBase from './button.css.ts';

export default style([
  buttonBase,
  {
    backgroundColor: 'transparent',
    border: 'none',
  },
]);
