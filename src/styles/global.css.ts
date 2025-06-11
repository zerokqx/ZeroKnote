import { createGlobalVar, globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/themes/light';

export const controlGap = createGlobalVar('gap', {
  syntax: '<length>',
  inherits: false,
  initialValue: vars.spacing.sm,
});

const paddingSyncWithControlY = createGlobalVar('padding-sync-with-control-y', {
  syntax: '<length>',
  inherits: false,
  initialValue: vars.spacing.xs,
});
const paddingSyncWithControlX = createGlobalVar('padding-sync-with-control-x', {
  syntax: '<length>',
  inherits: false,
  initialValue: vars.spacing.md,
});

export const paddingSyncWithControl = createGlobalVar(
  'padding-sync-with-control',
  {
    syntax: '<length>',
    inherits: false,
    initialValue: `${paddingSyncWithControlY} ${paddingSyncWithControlX}`,
  },
);

globalStyle('#root', {
  vars: {
    [paddingSyncWithControlY]: vars.spacing.xs,
    [paddingSyncWithControlX]: vars.spacing.md,
    [paddingSyncWithControl]: `${paddingSyncWithControlY} ${paddingSyncWithControlX}`,
  },
  height: '100%',
  borderRadius: vars.radius.sm,
  backgroundColor: vars.colors.primary[0],
  borderColor: vars.colors.primary[1],
  borderStyle: 'solid',
  borderWidth: 1,
  padding: paddingSyncWithControl,
  display: 'flex',
  width: 'auto',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: vars.spacing.sm,
});

globalStyle('body', {
  height: '100vh',
  padding: vars.spacing.sm,
});

globalStyle(':root', {
  fontFamily: 'Roboto, Inter, system-ui, Arial, sans-serif',
  fontSize: vars.fontSizes.sm,
  lineHeight: vars.lineHeights.md,
  fontWeight: 400,
  color: vars.colors.primary[9],
  fontSynthesis: 'style',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTextSizeAdjust: '100%',
});

globalStyle('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  width: 'inherit',
  height: 'inherit',
});
