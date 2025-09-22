import type { VirtualItem } from '@tanstack/react-virtual';
import type {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  RefObject,
} from 'react';
import type { TThought } from './thought.types.ts';

export interface TVItemProps {
  item: VirtualItem;
  thought: TThought;
}

export type TVItem = MemoExoticComponent<
  ForwardRefExoticComponent<TVItemProps & RefAttributes<HTMLDivElement>>
>;
