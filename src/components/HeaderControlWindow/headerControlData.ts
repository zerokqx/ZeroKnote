import Line from "@svg/16/Line.svg?react";
import { ComponentType, SVGProps } from "react";
import { IoClose } from "react-icons/io5";
import { FaWindowMaximize } from "react-icons/fa";

export const headerControlData: ComponentType<SVGProps<SVGSVGElement>>[] = [
  Line,
  FaWindowMaximize,

  IoClose,
];
