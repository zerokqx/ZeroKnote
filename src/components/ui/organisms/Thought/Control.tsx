import { createElement } from 'react';

import { Button } from '@atoms/Button';
import { C } from '@atoms/Controls';

import { controlConfig } from './configs/control.config.ts';

export const Control = () => {
  return (
    <C>
      {controlConfig.map(({ icon, idMap, ...props }) => (
        <Button {...props} key={idMap}>
          {createElement(icon)}
        </Button>
      ))}
    </C>
  );
};
