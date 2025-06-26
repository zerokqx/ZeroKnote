import { FaPlay, FaTrashCan } from 'react-icons/fa6';
import { FiCopy } from 'react-icons/fi';

import type { TControlConfig } from '../types/control.config.ts';

export const controlConfig: TControlConfig[] = [
  {
    idMap: 'play',
    icon: FaPlay,
    title: 'Перейти',
  },
  {
    idMap: 'copy',
    title: 'Скопировать содержимое',

    icon: FiCopy,
  },
  {
    title: 'Удалить мысль',
    idMap: 'trash',
    icon: FaTrashCan,
  },
];
