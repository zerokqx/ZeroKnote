import { FC, useMemo } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { headerControlWindowStyle } from "@/styles/headerControlWindow.css.ts";
import { WindowControl, WindowControlMock } from "@/utils/WindowControl.ts";
import { isTauri } from "@tauri-apps/api/core";
import { GhostButton } from "@/components/Button";
import { headerControlData } from "@/components/HeaderControlWindow/headerControlData.ts";

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
    <div className={headerControlWindowStyle}>
      {headerControlData.map((Icon, index) => (
        <GhostButton key={index}>
          <Icon />
        </GhostButton>
      ))}
    </div>
  );
};
