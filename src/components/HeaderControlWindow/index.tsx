import { FC, useMemo } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { Button } from "@/components/Button";
import { headerControlWindowStyle } from "@/styles/headerControlWindow.css.ts";
import Close from "@/assets/svg/16/Cross.svg?react";
import Line from "@/assets/svg/16/Line.svg?react";
import Rollup from "@/assets/svg/16/Window.svg?react";
import { WindowControl, WindowControlMock } from "@/utils/WindowControl.ts";
import { isTauri } from "@tauri-apps/api/core";

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
      <Button onClick={async () => await windowInstance.minimize()}>
        <Line />
      </Button>
      <Button>
        <Rollup />
      </Button>
      <Button onClick={async () => await windowInstance.close()}>
        <Close />
      </Button>
    </div>
  );
};
