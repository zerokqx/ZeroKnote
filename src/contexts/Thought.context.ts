import { createContext } from 'react';

import type { TThoughtContext } from '@/types/contexts/thought.types.ts';

export const ThoughtContext = createContext<TThoughtContext>({
  time: true,
});
