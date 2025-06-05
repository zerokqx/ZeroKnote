import { style } from "@vanilla-extract/css";
import { direction, flex, justify } from "@/styles/recipes/flex.css.ts";
import { controlGap } from "@/styles/global.css.ts";

export const controlStyle = style([
  flex,
  direction.row,
  justify.end,
  {
    gap: controlGap,
  },
]);
