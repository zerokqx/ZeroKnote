import { Group } from '@mantine/core';
import clsx from 'clsx';
import { type ComponentProps, type FC, memo } from 'react';

import { Button } from '@/components/Button';
import { AdaptiveLogotype } from '@/components/Header/AdaptiveLogotype.tsx';
import { headerData } from '@/components/Header/data.ts';
import { headerStyle, iconStyle } from '@/styles';

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
  }
);
