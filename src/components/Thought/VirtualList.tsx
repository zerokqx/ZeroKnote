import { useVirtualizer } from '@tanstack/react-virtual';
import type { ComponentProps, FC } from 'react';
import { useRef } from 'react';

import type { TThought } from '@/types';

import { RootThought } from '.';

export const VirtualList: FC<
  ComponentProps<'div'> & { thoughts: TThought[] }
> = ({ thoughts }) => {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: thoughts.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 120,
    gap: 10,
  });
  return (
    <div
      ref={parentRef}
      style={{
        height: '100%',
        overflow: 'auto',
        width: '100%',
        scrollBehavior: 'smooth',
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((item) => (
          <div
            key={item.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${item.size}px`,
              transform: `translateY(${item.start}px)`,
            }}
          >
            <RootThought.Thought thought={thoughts[item.index]} />
          </div>
        ))}
      </div>
    </div>
  );
};
