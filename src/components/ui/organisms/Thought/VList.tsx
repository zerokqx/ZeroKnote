import { useVirtualizer } from '@tanstack/react-virtual';
import { memo, useRef } from 'react';

import type { TVList } from './types';
import { VItem } from './VItem.tsx';

export const VList: TVList = memo(({ thoughts, style, render, ...props }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: thoughts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 70,

    gap: 20,
    measureElement: (el) => el.getBoundingClientRect().height,
    useScrollendEvent: true,
  });
  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div
      ref={parentRef}
      style={{
        height: '100%',
        overflow: 'auto',
        width: '100%',
        scrollbarWidth: 'none',
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: 'inherit',
          position: 'relative',
        }}
      >
        {virtualItems.map((item) =>
          render(
            item.key,
            item,
            thoughts[item.index],
            virtualizer.measureElement
          )
        )}
      </div>
    </div>
  );
}) as TVList;

VList.Item = VItem;
