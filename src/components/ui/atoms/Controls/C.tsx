import './styles/_initial.css.ts';
import { Group, Flex } from '@mantine/core';

import type { TControlProps } from './types';

/**
 * @description `С` от слова Controls. Единственный источник истины.
 * @param children
 * @param props
 * @constructor
 */
export const C: TControlProps = ({ children, ...props }) => (
  <Flex gap='xs' align={'right'} wrap='nowrap' {...props}>
    {children}
  </Flex>
);
