import { ComponentProps, FC } from "react";
import clsx from "clsx";
import { headerStyle } from "@/styles/Header/header.css.ts";
import { Controls } from "@/components/Header/Controls.tsx";
import Logotype from "@svg/128/128x28 Logo.svg?react";
import Settings from "@/assets/svg/16/Settings.svg?react";
import Obsidian from "@/assets/svg/16/Obsidian.svg?react";
import Random from "@svg/16/Random.svg?react";
import { logotypeSprinkler } from "@/styles/sprinkers/logotype.css.ts";
import { flexSprinkles } from "@/styles/sprinkers/flex.css.ts";

export const Header: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <header
      className={clsx(
        headerStyle,
        className,
        flexSprinkles({
          justifyContent: {
            mobile: "center",
            tablet: "space-between",
            desktop: "space-between",
          },
        }),
      )}
      {...props}
    >
      <Logotype
        className={logotypeSprinkler({
          display: {
            mobile: "none",
            desktop: "block",
            tablet: "block",
          },
        })}
      />
      <Controls>
        <Settings />
        <Random />
        <Obsidian />
      </Controls>
    </header>
  );
};
