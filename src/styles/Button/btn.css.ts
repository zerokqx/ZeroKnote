import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/themes/contract.ts";

export const buttonStyles = style([
  {
    backgroundColor: theme.button.primary,
  },
]);
