import './styles/_initial.css.ts';
import {Group} from '@mantine/core';

import type {TControlProps} from './types';

/**
 * @description `С` от слова Controls. Единственный источник истины.
 * @param children
 * @param props
 * @constructor
 */
export const C: TControlProps = ({ children, ...props }) => (
  <Group gap='xs' wrap='nowrap' {...props}>
    {children}
  </Group>
);
