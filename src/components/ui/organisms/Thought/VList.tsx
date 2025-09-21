import { useMantineTheme } from '@mantine/core';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ComponentProps, memo, useMemo, useRef } from 'react';

import type { TVList } from './types';
import { VItem } from './VItem.tsx';
import { CelindrResize } from './CelindrResize.tsx';
import { Thought } from './Thought.tsx';

export const VList: TVList = memo(
  ({ thoughts, style, render, ...props }: ComponentProps<TVList>) => {
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
      estimateSize: () => 70,
      gap,
      measureElement: (el) => el.getBoundingClientRect().height,
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
          {virtualItems.map((item) => (
            <div
              ref={virtualizer.measureElement}
              key={item.key}
              data-index={item.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                // height: `${item.size}px`,
                transform: `translateY( ${item.start}px )`,
                willChange: 'transform',
              }}
            >
              <CelindrResize>
                <Thought thought={thoughts[item.index]} />
              </CelindrResize>
            </div>
          ))}
          {/* {virtualItems.map((item) => */}
          {/*   render( */}
          {/*     item.key, */}
          {/*     item, */}
          {/*     thoughts[item.index], */}
          {/*     virtualizer.measureElement */}
          {/*   ) */}
          {/* )} */}
        </div>
      </div>
    );
  }
);

VList.Item = VItem;
