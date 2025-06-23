import clsx from 'clsx';
import { createElement, memo } from 'react';

import { buttonBase } from './styles';
import buttonGhostCss from './styles/buttonGhost.css.ts';
import type { IButton } from './types';

export const Button: IButton = memo(({ children, className, ...props }) => {
  return (
    <button className={clsx(buttonBase, className)} {...props}>
      {children}
    </button>
  );
});

export const GhostButton: IButton = ({ children, className, ...props }) =>
  createElement(Button, {
    className: clsx(buttonGhostCss, className),
    children,
    ...props,
  });
