import type { FlexProps } from '@mantine/core';
import type { FC } from 'react';

export interface TThought {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export type TThoughtComponent = FC<FlexProps & { thought: TThought }>;
