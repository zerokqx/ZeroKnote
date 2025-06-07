import { ComponentProps, FC, ReactNode } from "react";

export type IButton = FC<
  { children?: ReactNode | string } & ComponentProps<"button">
>;
