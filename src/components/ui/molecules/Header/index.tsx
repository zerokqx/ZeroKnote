import { Button } from '@atoms';
import { Group } from '@mantine/core';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import { iconStyle } from '../../../../styles';

import { AdaptiveLogotype } from './AdaptiveLogotype.tsx';
import { headerData } from './data.ts';
import { headerStyle } from './styles';

export const Header: FC<ComponentProps<'div'>> = memo(
  ({ className, ...props }) => {
    return (
      <header className={clsx(headerStyle, className)} {...props}>
        <AdaptiveLogotype />
        <Group gap='xs' wrap='nowrap'>
          {headerData.map((buttonData) => (
            <Button
              onClick={buttonData.onClick}
              key={`${buttonData.Icon}-${buttonData.Icon}`}
            >
              <buttonData.Icon className={iconStyle} />
            </Button>
          ))}
        </Group>
      </header>
    );
  },
);
