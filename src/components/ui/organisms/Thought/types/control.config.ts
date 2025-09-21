import type { ComponentProps } from 'react';
import type { IconType } from 'react-icons';

import type { IButton } from '@atoms/Button';

export type TControlConfig = ComponentProps<IButton> & {
  icon: IconType;
  idMap: string;
};
