import { Container, Text } from '@mantine/core';
import clsx from 'clsx';

import { thoughtStyle } from './styles/thought.css.ts';
import type { TThoughtComponent } from './types';

export const Thought: TThoughtComponent = ({ thought, ...props }) => {
  const { style, className, ...args } = props;

  return (
    <Container
      style={{
        flexGrow: 0,
        flexShrink: 0,
        contain: 'layout style paint',
        ...style,
      }}
      fluid
      className={clsx(thoughtStyle, className)}
      {...args}
    >
      <Text
        lineClamp={4}
        fw={700}
        size='md'
        style={{ contain: 'layout style' }}
      >
        {thought.content}
      </Text>
    </Container>
  );
};
