import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { mediaQueries } from '@/styles/breakpoints.ts';

const flexProperties = defineProperties({
  conditions: mediaQueries,
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    display: ['flex', 'inline-flex', 'block', 'none'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    alignContent: [
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'space-between',
    ],
    gap: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
  },

  shorthands: {
    placeItems: ['justifyContent', 'alignItems'],
  },
});

export const flexSprinkles = createSprinkles(flexProperties);
export type FlexSprinkles = Parameters<typeof flexSprinkles>[0];
