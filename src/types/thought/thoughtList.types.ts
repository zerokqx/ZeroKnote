import type { VirtualItem } from '@tanstack/react-virtual';
import type { FC, ReactNode } from 'react';

import type { TThought } from '@/types';

export type TThoughtList = FC<{
  children: ReactNode;
}>;

export type ThoughtVListItem = FC<{
  item: VirtualItem;
  thought: TThought;
}>;
