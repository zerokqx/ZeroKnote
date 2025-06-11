import type { FC, ReactNode } from 'react';

import type { TThoughtContext } from '@/types/contexts/thought.types.ts';

import type { TThoughtList } from './thoughtList.types.ts';

export interface TThought {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export interface ThoughtComputed {
  List: TThoughtList;
  Thought: FC<{ thought: TThought }>;
}

export type ThoughtRoot = FC<{
  children: ReactNode;
  value: TThoughtContext;
}> &
  ThoughtComputed;
