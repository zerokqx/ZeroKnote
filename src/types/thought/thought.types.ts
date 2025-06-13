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
  Thought: FC<{ thought: TThought } & ComponentProps<'div'>>;
}

export type ThoughtRoot = FC<
  {
    children: ReactNode;
  } & StackProps
> &
  ThoughtComputed;
