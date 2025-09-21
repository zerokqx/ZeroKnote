import { useMantineTheme } from '@mantine/core';
import { useVirtualizer } from '@tanstack/react-virtual';
import { memo, useMemo, useRef } from 'react';

import type { TVList } from './types';
import { VItem } from './VItem.tsx';

export const VList: TVList = memo(({ thoughts, style, render, ...props }) => {
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
        contain: 'strict',
        scrollbarWidth: 'none',
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
          contain: 'layout style paint',
        }}
      >
        {virtualItems.map((item) =>
          render(item.key, item, thoughts[item.index]),
        )}
      </div>
    </div>
  );
});

VList.Item = VItem;
