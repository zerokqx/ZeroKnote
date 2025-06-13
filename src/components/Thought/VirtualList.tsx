import { useMantineTheme } from '@mantine/core';
import type { VirtualItem } from '@tanstack/react-virtual';
import { useVirtualizer } from '@tanstack/react-virtual';
import { type ComponentProps, type FC, memo, useMemo, useRef } from 'react';

import { CelindrResize } from '@/components/Thought/CelindrResize.tsx';
import type { TThought } from '@/types';

import { RootThought } from './RootThought';

const VItem = memo<{
  item: VirtualItem;
  thought: TThought;
}>(({ item, thought }) => (
  <div
    key={item.key}
    data-index={item.index}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: `${item.size}px`,
      transform: `translateY( ${item.start}px )`,
      willChange: 'transform',
    }}
  >
    <CelindrResize>
      <RootThought.Thought thought={thought} />
    </CelindrResize>
  </div>
));

export const VirtualList: FC<
  ComponentProps<'div'> & { thoughts: TThought[] }
> = ({ thoughts }) => {
  const theme = useMantineTheme();
  const parentRef = useRef<HTMLDivElement | null>(null);

  const gap = useMemo(() => {
    const regex = /(\d+)/;
    const match = theme.spacing.xs.match(regex);
    return Number(match ? match[0] : 10);
  }, [theme.spacing.xs]);
  const virtualizer = useVirtualizer({
    count: thoughts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 120,
    gap,
    useScrollendEvent: true,
    overscan: 2,
    horizontal: false,
    lanes: 1,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div
      ref={parentRef}
      style={{
        height: '100%',
        overflow: 'auto',
        width: '100%',
        // Убираем scrollBehavior: 'smooth' при виртуализации
        contain: 'strict', // CSS containment для лучшей производительности
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
          // Добавляем contain для оптимизации
          contain: 'layout style paint',
        }}
      >
        {virtualItems.map((item) => (
          <VItem key={item.key} item={item} thought={thoughts[item.index]} />
        ))}
      </div>
    </div>
  );
};
