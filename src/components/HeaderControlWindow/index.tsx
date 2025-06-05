import { FC } from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { Button } from "@/components/Button";
import { headerControlWindowStyle } from "@/styles/headerControlWindow.css.ts";
import Close from "@/assets/svg/16/Cross.svg?react";
import Line from "@/assets/svg/16/Line.svg?react";
import Rollup from "@/assets/svg/16/Window.svg?react";
import { WindowControlMock } from "@/utils/WindowControl.ts";
import { isTauri } from "@tauri-apps/api/core";

export const HeaderControlWindow: FC = () => {
  const d = getCurrentWindow();
  //TODO Mock класса
  const win = new WindowControlMock(d);
  console.log(isTauri());
  return (
    <div className={headerControlWindowStyle}>
      <Button onClick={async () => await win.minimize()}>
        <Line />
      </Button>
      <Button>
        <Rollup />
      </Button>
      <Button onClick={async () => await win.close()}>
        <Close />
      </Button>
    </div>
  );
};
