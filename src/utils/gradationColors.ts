import type { MantineColorsTuple } from '@mantine/core';
import chroma from 'chroma-js';

export const gradationColors = (
  from: string,
  to: string
): MantineColorsTuple => {
  return chroma
    .scale([from, to])
    .mode('lch')
    .colors(10) as unknown as MantineColorsTuple;
};
