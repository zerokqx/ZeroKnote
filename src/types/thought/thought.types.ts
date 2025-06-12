import type { FC, ReactNode } from 'react';

export interface TThought {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export interface ThoughtComputed {
  Thought: FC<{ thought: TThought }>;
}

export type ThoughtRoot = FC<{
  children: ReactNode;
}> &
  ThoughtComputed;
