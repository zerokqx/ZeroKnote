import { FC, useMemo } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { WindowControl, WindowControlMock } from "@/utils/WindowControl.ts";
import { isTauri } from "@tauri-apps/api/core";
import { GhostButton } from "@/components/Button";
import { headerControlData } from "@/components/HeaderControlWindow/headerControlData.ts";
import { Flex, Group } from "@mantine/core";
import { iconStyle } from "@/styles";
import { paddingStyle } from "@/styles/headerControlWindow.css.ts";

export const HeaderControlWindow: FC = () => {
  const env = isTauri() && getCurrentWindow();
  const windowInstance = useMemo(() => {
    if (env) {
      return import.meta.env.DEV
        ? new WindowControlMock(env)
        : new WindowControl(env);
    }
    return null;
  }, [env]);
  if (!windowInstance) return null;
  return (
    <Flex className={paddingStyle} direction={"row"} justify={"flex-end"}>
      <Group gap={"xs"}>
        {headerControlData.map((Icon, index) => (
          <GhostButton key={index}>
            <Icon className={iconStyle} />
          </GhostButton>
        ))}
      </Group>
    </Flex>
  );
};
