import { Thought } from '@/components/Thought/Thought.tsx';
import { ThoughtList } from '@/components/Thought/ThoughtList.tsx';
import { ThoughtContext } from '@/contexts/Thought.context.ts';
import type { ThoughtRoot } from '@/types/thought/thought.types.ts';

export function RootThought({ children, value }: Parameters<ThoughtRoot>[0]) {
  return (
    <ThoughtContext.Provider value={value}>{children}</ThoughtContext.Provider>
  );
}

RootThought.Thought = Thought;
RootThought.List = ThoughtList;
