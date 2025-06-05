import { style } from "@vanilla-extract/css";
import { direction, flex, justify } from "@/styles/recipes/flex.css.ts";
import { theme } from "@/styles/themes/contract.css.ts";

export const headerControlWindowStyle = style([
  flex,
  direction.row,
  justify.end,
  {
    paddingBottom: ".5%",

    gap: "1%",
    borderBottom: `1px solid ${theme.border.primary} `,
  },
]);
