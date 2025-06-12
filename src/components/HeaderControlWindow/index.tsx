import { Flex, Group } from '@mantine/core';

import { GhostButton } from '@/components/Button';
import { headerControlData } from '@/components/HeaderControlWindow/headerControlData.ts';
import { iconStyle } from '@/styles';
import { paddingSyncWithControl } from '@/styles/global.css.ts';

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
      w="100%"
      direction="row"
      justify="flex-end"
    >
      <Group gap="xs">
        {headerControlData.map((Icon) => (
          <GhostButton key={`${Icon}`}>
            <Icon className={iconStyle} />
          </GhostButton>
        ))}
      </Group>
    </Flex>
  );
};
