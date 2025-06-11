import { Container, Text } from '@mantine/core';

import { thoughtStyle } from '@/styles/components-styles/thought/thought.css.ts';
import type { ThoughtRoot } from '@/types';

export const Thought: ThoughtRoot['Thought'] = ({ thought }) => {
  // const state = useGetThoughtState();
  return (
    <Container fluid className={thoughtStyle}>
      <Text lineClamp={4} fw={700} size="md">
        {thought.content}
      </Text>
    </Container>
  );
};
