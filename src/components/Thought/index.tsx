import { Flex } from '@mantine/core';

import { Thought } from '@/components/Thought/Thought.tsx';
import { ThoughtContext } from '@/contexts/Thought.context.ts';
import { thoughtList } from '@/styles/components-styles/thought/thought.css.ts';
import type { ThoughtRoot } from '@/types/thought/thought.types.ts';

export const RootThought: ThoughtRoot = ({ children, value }) => {
  return (
    <ThoughtContext.Provider value={value}>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        justify="flex-end"
        gap="sm"
        className={thoughtList}
      >
        {children}
      </Flex>
    </ThoughtContext.Provider>
  );
};

RootThought.Thought = Thought;
