import { Flex, Text } from '@mantine/core';
import clsx from 'clsx';

import { paddingSyncWithControl } from '@atoms/Controls/styles';

import { Control } from './Control.tsx';
import { thoughtStyle } from './styles/thought.css.ts';
import type { TThoughtComponent } from './types';

export const Thought: TThoughtComponent = ({ thought, ...props }) => {
  const { className, ...args } = props;

  return (
    <Flex
      p={paddingSyncWithControl}
      className={clsx(thoughtStyle, className)}
      direction='row'
      justify='space-between'
      align='start'
      {...args}
    >
      <Text lineClamp={4} fw={700} size='md'>
        {thought.content}
      </Text>
      <Control />
    </Flex>
  );
};
