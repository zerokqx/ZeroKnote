import { useContext } from 'react';

import { ThoughtContext } from '@/contexts/Thought.context.ts';
import type { TThoughtContext } from '@/types/contexts/thought.types.ts';

export const useGetThoughtState = (): TThoughtContext =>
  useContext(ThoughtContext);
