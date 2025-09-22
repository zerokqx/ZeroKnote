import { ComponentProps, forwardRef, memo } from 'react';

import { CelindrResize } from './CelindrResize.tsx';
import { Thought } from './Thought.tsx';
import type { TVItem } from './types';

export const VItem: TVItem = memo(
  forwardRef(({ item, thought }, ref) => {
    return (
      <div
        ref={ref}
        key={item.key}
        data-index={item.index}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          transform: `translateY( ${item.start}px )`,
          willChange: 'transform',
        }}
      >
        <CelindrResize>
          <Thought thought={thought} />
        </CelindrResize>
      </div>
    );
  })
);
