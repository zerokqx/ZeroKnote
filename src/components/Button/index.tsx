import { ComponentProps, FC, ReactNode } from "react";
import clsx from "clsx";
import { buttonStyles } from "@/styles/Button/button.css.ts";

export const Button: FC<
  { children: ReactNode | string } & ComponentProps<"button">
> = ({ children, className, ...props }) => {
  return (
    <button className={clsx(buttonStyles, className)} {...props}>
      {children}
    </button>
  );
};
