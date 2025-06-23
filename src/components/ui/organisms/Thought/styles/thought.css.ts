import { borderCss } from '@styles/recipes';
import { vars } from '@styles/themes';
import { style } from '@vanilla-extract/css';

export const thoughtStyle = style([
  borderCss(),
  {
    borderRadius: vars.radius.sm,
    overflow: 'hidden',
    padding: `${vars.spacing.sm} ${vars.spacing.xs} ${vars.spacing.sm} ${vars.spacing.md}`,
    minHeight: '70px',
    maxHeight: '100px',
    height: 'fit-content',
    scrollSnapAlign: 'start',
  },
]);

export const thoughtList = style({
  overflowY: 'auto',
  overflowX: 'hidden',
  scrollBehavior: 'smooth',
  scrollSnapType: 'y mandatory',
  borderRadius: vars.radius.sm,
});
