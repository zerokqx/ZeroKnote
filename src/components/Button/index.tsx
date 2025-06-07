import clsx from "clsx";
import { IButton } from "@/types/button.types.ts";
import { createElement } from "react";
import buttonGhostCss from "@/styles/Button/buttonGhost.css.ts";
import { buttonBase } from "@/styles";

export const Button: IButton = ({ children, className, ...props }) => {
  return (
    <button className={clsx(buttonBase, className)} {...props}>
      {children}
    </button>
  );
};

export const GhostButton: IButton = ({ children, className, ...props }) =>
  createElement(Button, {
    className: clsx(buttonGhostCss, className),
    children,
    ...props,
  });
