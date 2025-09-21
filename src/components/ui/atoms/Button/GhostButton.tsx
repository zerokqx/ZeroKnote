import clsx from 'clsx';
import { createElement } from 'react';

import { Button } from './Button.tsx';
import buttonGhostCss from './styles/buttonGhost.css.ts';
import type { IButton } from './types';

export const GhostButton: IButton = ({ children, className, ...props }) =>
  createElement(Button, {
    className: clsx(buttonGhostCss, className),
    children,
    ...props,
  });
