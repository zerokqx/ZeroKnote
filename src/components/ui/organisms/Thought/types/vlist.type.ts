import type { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';
import type { ComponentProps, FC, ReactNode } from 'react';

import type { TThought } from './thought.types.ts';
import type { TVItem } from './vitem.type.ts';

export type TVListRenderProp = (
  key: VirtualItem['key'],
  item: VirtualItem,
  thought: TThought,
  ref: ReturnType<typeof useVirtualizer>['measureElement']
) => ReactNode;

export interface TVListProps {
  thoughts: TThought[];
  render: TVListRenderProp;
}

export interface TVListComputed {
  Item: TVItem;
}

export type TVList = FC<ComponentProps<'div'> & TVListProps> & TVListComputed;
