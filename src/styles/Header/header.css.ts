import { style } from "@vanilla-extract/css";
import { direction, flex, items, justify } from "@/styles/recipes/flex.css.ts";
import { theme } from "@/styles/themes/contract.css.ts";

export const headerStyle = style([
  flex,
  direction.row,
  items.center,
  justify.between,
  {
    border: `1px solid ${theme.border.primary} `,
    height: 45,
    borderRadius: 10,
    padding: "0 30px 0 30px",
  },
]);
