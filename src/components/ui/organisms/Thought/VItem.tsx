import { memo } from 'react';

import { CelindrResize } from './CelindrResize.tsx';
import { Thought } from './Thought.tsx';
import type { TVItem } from './types';

export const VItem: TVItem = memo(({ item, thought }, ref) => {
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
        height: `${item.size}px`,
        transform: `translateY( ${item.start}px )`,
        willChange: 'transform',
      }}
    >
      <CelindrResize>
        <Thought thought={thought} />
      </CelindrResize>
    </div>
  );
});
