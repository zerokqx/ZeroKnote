import { style } from "@vanilla-extract/css";
import { direction, flex, items, justify } from "@/styles/recipes/flex.css.ts";
import { vars } from "@/styles/themes/theme.css.ts";
import { paddingRoot } from "@/styles/global.css.ts";

export default style([
  flex,
  direction.row,
  items.center,
  justify.between,
  {
    minWidth: "min-content",
    border: `1px solid ${vars.colors.primary[1]} `,
    minHeight: 45,
    maxHeight: "max-content",
    borderRadius: 10,
    padding: paddingRoot,
    transition: "0.1s ease-in-out",
  },
]);
