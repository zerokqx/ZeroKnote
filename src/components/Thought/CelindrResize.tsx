import { domAnimation, LazyMotion } from 'motion/react';
import * as m from 'motion/react-m';
import type { FC, ReactNode } from 'react';
import { isValidElement, memo } from 'react';

export const CelindrResize: FC<{ children: ReactNode }> = memo(
  ({ children }) => {
    if (!isValidElement(children)) {
      return null;
    }

    return (
      <LazyMotion strict features={domAnimation}>
        <m.div
          style={{
            height: 'max-content',
            width: '100%',
            opacity: 1,
            transformOrigin: 'center',
          }}
          initial={{ transform: 'scaleX(0.9)', opacity: 0 }}
          animate={{ transform: 'scaleX(1)', opacity: 1 }}
        >
          {children}
        </m.div>
      </LazyMotion>
    );
  },
);
