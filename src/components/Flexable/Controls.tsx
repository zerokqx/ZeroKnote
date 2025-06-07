import { ComponentProps, FC, ReactNode } from "react";
import clsx from "clsx";
import { IButton } from "@/types/button.types.ts";
import { controlStyle } from "@/styles";

export const Controls: FC<
  ComponentProps<"div"> & {
    children: ReactNode[];
    ButtonLocal: IButton;
  }
> = ({ className, ButtonLocal, children, ...props }) => {
  return (
    <div className={clsx(controlStyle, className)} {...props}>
      {children.map((icon, key) => (
        <ButtonLocal key={key}>{icon}</ButtonLocal>
      ))}
    </div>
  );
};
