import type { VirtualItem } from '@tanstack/react-virtual';
import type { ComponentProps, FC } from 'react';

import type { TThought } from './thought.types.ts';

export interface TVItemProps {
  item: VirtualItem;
  thought: TThought;
}

export type TVItem = FC<ComponentProps<'div'> & TVItemProps>;
