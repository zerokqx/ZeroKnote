import type { ComponentType, SVGProps } from 'react';
import { FaWindowMaximize } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

import Line from '@assets/svg/16/Line.svg?react';

export const headerControlData: Array<ComponentType<SVGProps<SVGSVGElement>>> =
  [Line, FaWindowMaximize, IoClose];
