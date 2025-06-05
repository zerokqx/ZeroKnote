import { ComponentProps, FC, ReactNode } from "react";
import clsx from "clsx";
import { Button } from "@/components/Button";
import { controlStyle } from "@/styles/Header/control.css.ts";

export const Controls: FC<
  ComponentProps<"div"> & { children: ReactNode[]; ButtonLocal: ReactNode }
> = ({ className, ButtonLocal, children, ...props }) => {
  return (
    <div className={clsx(controlStyle, className)} {...props}>
      {children.map((icon, key) => (
        <Button key={key}>{icon}</Button>
      ))}
    </div>
  );
};
