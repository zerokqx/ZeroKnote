import type { StackProps } from '@mantine/core';
import type { ComponentProps, FC, ReactNode } from 'react';

export interface TThought {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export interface ThoughtComputed {
  VList: FC<ComponentProps<'div'> & { thoughts: TThought[] }>;
  Thought: FC<{ thought: TThought }>;
}

export type ThoughtRoot = FC<
  {
    children: ReactNode;
  } & StackProps
> &
  ThoughtComputed;
