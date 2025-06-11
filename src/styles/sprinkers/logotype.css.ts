import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { mediaQueries } from '@/styles/breakpoints.ts';

export const d = defineProperties({
  conditions: mediaQueries,
  responsiveArray: ['mobile', 'tablet', 'desktop'],

  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'block'],
  },
});

export const logotypeSprinkler = createSprinkles(d);
