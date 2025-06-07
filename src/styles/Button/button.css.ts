import { createVar, style } from "@vanilla-extract/css";
import { flex, items, justify } from "@/styles/recipes/flex.css.ts";
import { borderCss } from "@/styles/recipes/border.css.ts";
import { vars } from "@/styles/themes/theme.css.ts";

export const buttonSize = createVar({
  syntax: "<number>",
  initialValue: "36px",
  inherits: false,
});

export default style([
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
    backgroundColor: vars.colors.white[500],
    selectors: {
      "&:active": {
        backgroundColor: vars.colors.white[13200],
        translate: "0 0.1rem",
      },
    },
  },
]);
