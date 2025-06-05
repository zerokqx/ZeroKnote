import { style } from "@vanilla-extract/css";
import { theme } from "@/styles/themes/contract.css.ts";

export const borderCss = style({
  backgroundColor: theme.button.primary,

  borderColor: theme.border.primary,

  borderStyle: "solid",

  borderWidth: 1,
});
