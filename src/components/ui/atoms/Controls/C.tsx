import './styles/_initial.css.ts';
import {Group} from '@mantine/core';
import type {ComponentProps, FC} from 'react';

/**
 * @description `С` от слова Controls. Единственный источник истины.
 * @param children
 * @param props
 * @constructor
 */
export const C: FC<ComponentProps<typeof Group>> = ({ children, ...props }) => (
  <Group gap='xs' wrap='nowrap' {...props}>
    {children}
  </Group>
);
