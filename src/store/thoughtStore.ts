import { create } from 'zustand/react';

import type { ThoughtStoreState } from '@/types';

export const useThoughtStore = create<ThoughtStoreState>()((set) => ({
  settings: {
    time: true,
  },
  setSettings: (s) => set({ settings: s }),
}));
