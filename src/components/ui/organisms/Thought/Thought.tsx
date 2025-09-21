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
      mah={100}
      mih={70}
      {...args}
    >
      <Text w='100%' lineClamp={4} fw={700} size='md'>
        {thought.content}
      </Text>
      <Flex
        flex={1}
        direction='column'
        justify={'space-between'}
        align={'center'}
        h='100%'
      >
        <Control />
        <Text style={{ textAlign: 'end' }} w='100%'>
          {thought.createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};
