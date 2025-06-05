import { ComponentProps, FC } from "react";
import clsx from "clsx";
import { headerStyle } from "@/styles/Header/header.css.ts";
import { Controls } from "@/components/Header/Controls.tsx";
import Logotype from "@svg/128/128x28 Logo.svg?react";

export const Header: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <header className={clsx(headerStyle, className)} {...props}>
      <Logotype />
      <Controls />
    </header>
  );
};
