import clsx from 'clsx';
import { memo } from 'react';

import { buttonBase } from './styles';
import type { IButton } from './types';

export const Button: IButton = memo(({ children, className, ...props }) => {
  return (
    <button className={clsx(buttonBase, className)} {...props}>
      {children}
    </button>
  );
});
