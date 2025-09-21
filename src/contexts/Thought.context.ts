import { createContext } from 'react';

import type { TThoughtContext } from '@types/contexts';

export const ThoughtContext = createContext<TThoughtContext>({
  time: true,
});
