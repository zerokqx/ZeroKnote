import type { ComponentType, SVGProps } from 'react';
import { FaRandom } from 'react-icons/fa';
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
    Icon: FaRandom,
    onClick: () => console.log('Random'),
  },
  {
    Icon: SiObsidian,
    onClick: () => console.log('Obsidian'),
  },
];
