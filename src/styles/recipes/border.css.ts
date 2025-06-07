import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/themes/theme.css.ts";

export const borderCss = style({
  borderColor: vars.colors.white[500],

  borderStyle: "solid",

  borderWidth: 1,
});
