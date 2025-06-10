import Random from "@svg/16/Random.svg?react";
import { ComponentType, SVGProps } from "react";
import { SiObsidian } from "react-icons/si";
import { IoSettings } from "react-icons/io5";

export const headerData: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}[] = [
  {
    Icon: IoSettings,
    onClick: () => console.log("Settings"),
  },
  {
    Icon: Random,
    onClick: () => console.log("Random"),
  },
  {
    Icon: SiObsidian,
    onClick: () => console.log("Obsidian"),
  },
];
