import { Container, Text } from '@mantine/core';
import clsx from 'clsx';
import { memo } from 'react';

import { thoughtStyle } from '@/styles/components-styles/thought/thought.css.ts';
import type { ThoughtRoot } from '@/types';

export const Thought: ThoughtRoot['Thought'] = memo(({ thought, ...props }) => {
  const { style, className, ...args } = props;

  return (
    <Container
      style={{
        flexGrow: 0,
        flexShrink: 0,
        // Оптимизация для виртуализации
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
        // Добавляем contain для текста
        style={{ contain: 'layout style' }}
      >
        {thought.content}
      </Text>
    </Container>
  );
});

Thought.displayName = 'Thought';
