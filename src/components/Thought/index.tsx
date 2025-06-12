import 'react-virtualized/styles.css';
import { Stack } from '@mantine/core';
import clsx from 'clsx';

import { Thought } from '@/components/Thought/Thought.tsx';
import { VirtualList } from '@/components/Thought/VirtualList.tsx';
import { thoughtList } from '@/styles/components-styles/thought/thought.css.ts';
import type { ThoughtRoot } from '@/types/thought/thought.types.ts';

export const RootThought: ThoughtRoot = ({ children, className, ...props }) => {
  return (
    <Stack
      gap="sm"
      justify="end"
      className={clsx(thoughtList, className)}
      {...props}
    >
      {children}
    </Stack>
  );
};

RootThought.Thought = Thought;
RootThought.VList = VirtualList;
