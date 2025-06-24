import type { Container } from '@mantine/core';
import type { ComponentProps, FC } from 'react';

export interface TThought {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export type TThoughtComponent = FC<
  ComponentProps<typeof Container> & { thought: TThought }
>;
