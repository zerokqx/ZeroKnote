import clsx from 'clsx';
import { createElement } from 'react';

import { buttonBase } from '@/styles';
import buttonGhostCss from '@/styles/components-styles/button/buttonGhost.css.ts';
import type { IButton } from '@/types/button.types.ts';

export const Button: IButton = ({ children, className, ...props }) => {
  return (
    <button className={clsx(buttonBase, className)} {...props}>
      {children}
    </button>
  );
};

export const GhostButton: IButton = ({ children, className, ...props }) =>
  createElement(Button, {
    className: clsx(buttonGhostCss, className),
    children,
    ...props,
  });
