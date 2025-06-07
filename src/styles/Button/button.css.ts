import { style } from "@vanilla-extract/css";
import { flex, items, justify } from "@/styles/recipes/flex.css.ts";
import { borderCss } from "@/styles/recipes/border.css.ts";
import { vars } from "@/styles/themes";
import { activeColor, buttonSize } from "@/styles/Button/variables.css.ts";
import { rem } from "@mantine/core";

export default style([
  flex,
  items.center,
  justify.center,
  borderCss,
  {
    vars: {
      [buttonSize]: "36px",
      [activeColor]: vars.colors.primary[1],
    },
    minHeight: buttonSize,
    minWidth: buttonSize,
    borderRadius: vars.radius.xs,
    transition: "0.1s ease",
    backgroundColor: vars.colors.primary[0],
    selectors: {
      "&:active": {
        backgroundColor: activeColor,
        translate: `0 ${rem(2)}`,
      },
    },
  },
]);
