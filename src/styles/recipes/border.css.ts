import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/themes";

export const borderCss = style({
  borderColor: vars.colors.primary[1],
  borderStyle: "solid",
  borderWidth: 1,
});
