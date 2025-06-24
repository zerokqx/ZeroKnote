import { GhostButton } from '@atoms/Button';
import { C } from '@atoms/Controls';
import { paddingSyncWithControl } from '@atoms/Controls/styles';
import { Flex } from '@mantine/core';

import { iconStyle } from '../../../../styles';

import { headerControlData } from './headerControlData.ts';

export const HeaderControlWindow = () => {
  // const env = isTauri() && getCurrentWindow();
  // const windowInstance = useMemo(() => {
  //   if (env instanceof Window) {
  //     return import.meta.env.DEV
  //       ? new WindowControlMock(env)
  //       : new WindowControl(env);
  //   }
  //   return null;
  // }, [env]);
  return (
    <Flex
      p={paddingSyncWithControl}
      w='100%'
      direction='row'
      justify='flex-end'
    >
      <C>
        {headerControlData.map((Icon) => (
          <GhostButton key={`${Icon}`}>
            <Icon className={iconStyle} />
          </GhostButton>
        ))}
      </C>
    </Flex>
  );
};
