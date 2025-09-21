import { globalStyle } from '@vanilla-extract/css';

import { vars } from '@styles/themes';

import {
  paddingSyncWithControl,
  paddingSyncWithControlX,
  paddingSyncWithControlY,
} from './paddingVariables.css';

globalStyle(':root', {
  vars: {
    [paddingSyncWithControlY]: vars.spacing.xs,
    [paddingSyncWithControlX]: vars.spacing.md,
    [paddingSyncWithControl]: `${paddingSyncWithControlY} ${paddingSyncWithControlX}`,
  },
});
