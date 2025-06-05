import { style } from "@vanilla-extract/css";
import { direction, flex, items, justify } from "@/styles/recipes/flex.css.ts";
import { theme } from "@/styles/themes/contract.css.ts";

export const headerStyle = style([
  flex,
  direction.row,
  items.center,
  justify.between,
  {
    minWidth: "min-content",
    border: `1px solid ${theme.border.primary} `,
    minHeight: 45,
    maxHeight: "max-content",
    borderRadius: 10,
    padding: "5px 30px 5px 30px",
    transition: "0.1s ease-in-out",
  },
]);
