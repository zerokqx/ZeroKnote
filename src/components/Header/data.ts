import Settings from "@/assets/svg/16/Settings.svg?react";
import Obsidian from "@/assets/svg/16/Obsidian.svg?react";
import Random from "@svg/16/Random.svg?react";
import { ComponentType, SVGProps } from "react";

export const headerData: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}[] = [
  {
    Icon: Settings,
    onClick: () => console.log("Settings"),
  },
  {
    Icon: Random,
    onClick: () => console.log("Random"),
  },
  {
    Icon: Obsidian,
    onClick: () => console.log("Obsidian"),
  },
];
