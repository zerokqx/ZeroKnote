import type { TThoughtContext } from '@/types/contexts/thought.types.ts';

export interface ThoughtStoreState {
  settings: TThoughtContext;
  setSettings: (s: TThoughtContext) => void;
}
