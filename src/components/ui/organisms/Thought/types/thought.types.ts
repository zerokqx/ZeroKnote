import type { FlexProps } from '@mantine/core';
import type { FC } from 'react';
// WARNING: createdAt и updatedAt могут быть `null`
export interface TThought {
  id: string;
  name: string;
  createdAt: string | null;
  updatedAt: string | null;
  content: string;
}

export type TThoughtComponent = FC<FlexProps & { thought: TThought }>;
