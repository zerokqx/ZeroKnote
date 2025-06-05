import { createVar, style } from "@vanilla-extract/css";
import { theme } from "@/styles/themes/contract.css.ts";
import { flex, items, justify } from "@/styles/recipes/flex.css.ts";
import { borderCss } from "@/styles/recipes/border.css.ts";

const buttonSize = createVar({
  syntax: "<number>",
  initialValue: "36px",
  inherits: false,
});

export const buttonStyles = style([
  flex,
  items.center,
  justify.center,
  borderCss,
  {
    vars: {
      [buttonSize]: "36px",
    },
    minHeight: buttonSize,
    minWidth: buttonSize,
    borderRadius: "8px",
    transition: "0.1s ease",
    selectors: {
      "&:active": {
        backgroundColor: theme.active,
        translate: "0 0.1rem",
      },
    },
  },
]);
