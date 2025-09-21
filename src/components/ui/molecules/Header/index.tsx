import type { IButton } from '@atoms/Button';
import { C } from '@atoms/Controls';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import { iconStyle } from '@styles/icon.css.ts';

import { AdaptiveLogotype } from './AdaptiveLogotype.tsx';
import { headerData } from './data.ts';
import { headerStyle } from './styles';

export const Header: FC<{ Button: IButton } & ComponentProps<'header'>> = memo(
  ({ Button: ButtonLocal, className, ...props }) => {
    return (
      <header className={clsx(headerStyle, className)} {...props}>
        <AdaptiveLogotype />
        <C gap='xs' wrap='nowrap'>
          {headerData.map((buttonData) => (
            <ButtonLocal
              onClick={buttonData.onClick}
              key={`${buttonData.Icon}-${buttonData.Icon}`}
            >
              <buttonData.Icon className={iconStyle} />
            </ButtonLocal>
          ))}
        </C>
      </header>
    );
  },
);
