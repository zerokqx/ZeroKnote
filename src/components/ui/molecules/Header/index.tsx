import { Group } from '@mantine/core';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import { type IButton } from '@atoms';

import { iconStyle } from '../../../../styles';

import { AdaptiveLogotype } from './AdaptiveLogotype.tsx';
import { headerData } from './data.ts';
import { headerStyle } from './styles';

export const Header: FC<{ Button: IButton } & ComponentProps<'header'>> = memo(
  ({ Button: ButtonLocal, className, ...props }) => {
    return (
      <header className={clsx(headerStyle, className)} {...props}>
        <AdaptiveLogotype />
        <Group gap='xs' wrap='nowrap'>
          {headerData.map((buttonData) => (
            <ButtonLocal
              onClick={buttonData.onClick}
              key={`${buttonData.Icon}-${buttonData.Icon}`}
            >
              <buttonData.Icon className={iconStyle} />
            </ButtonLocal>
          ))}
        </Group>
      </header>
    );
  },
);
