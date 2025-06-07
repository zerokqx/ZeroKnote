import { style } from "@vanilla-extract/css";
import { activeColor } from "@/styles/Button/variables.css.ts";

export const borderCss = style({
  borderColor: activeColor,
  borderStyle: "solid",
  borderWidth: 1,
});
