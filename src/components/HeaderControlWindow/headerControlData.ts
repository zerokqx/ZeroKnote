import Line from '@svg/16/Line.svg?react';
import type { ComponentType, SVGProps } from 'react';
import { FaWindowMaximize } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export const headerControlData: Array<ComponentType<SVGProps<SVGSVGElement>>> =
  [Line, FaWindowMaximize, IoClose];
