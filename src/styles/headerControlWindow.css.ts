import { style } from "@vanilla-extract/css";
import { direction, flex, justify } from "@/styles/recipes/flex.css.ts";
import { controlGap } from "@/styles/global.css.ts";

export const headerControlWindowStyle = style([
  flex,
  direction.row,
  justify.end,
  {
    padding: "0 30px 10px 30px",
    borderRadius: 0,
    gap: controlGap,
  },
]);
