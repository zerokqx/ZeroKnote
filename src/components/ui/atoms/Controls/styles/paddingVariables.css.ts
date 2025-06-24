import { createGlobalVar } from '@vanilla-extract/css';

import { vars } from '@styles/themes';

export const paddingSyncWithControlY = createGlobalVar(
  'padding-sync-with-control-y',
  {
    syntax: '<length>',
    inherits: false,
    initialValue: vars.spacing.xs,
  },
);
export const paddingSyncWithControlX = createGlobalVar(
  'padding-sync-with-control-x',
  {
    syntax: '<length>',
    inherits: false,
    initialValue: vars.spacing.md,
  },
);

export const paddingSyncWithControl = createGlobalVar(
  'padding-sync-with-control',
  {
    syntax: '<length>',
    inherits: false,
    initialValue: `${paddingSyncWithControlY} ${paddingSyncWithControlX}`,
  },
);
