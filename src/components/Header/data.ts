import Random from '@svg/16/Random.svg?react';
import type { ComponentType, SVGProps } from 'react';
import { IoSettings } from 'react-icons/io5';
import { SiObsidian } from 'react-icons/si';

export const headerData: Array<{
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}> = [
  {
    Icon: IoSettings,
    onClick: () => console.log('Settings'),
  },
  {
    Icon: Random,
    onClick: () => console.log('Random'),
  },
  {
    Icon: SiObsidian,
    onClick: () => console.log('Obsidian'),
  },
];
