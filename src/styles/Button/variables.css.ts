import { createVar } from "@vanilla-extract/css";
import { vars } from "@/styles/themes";

export const buttonSize = createVar({
  syntax: "<number>",
  initialValue: "36px",
  inherits: false,
});

export const activeColor = createVar({
  syntax: "<color>",
  initialValue: vars.colors.primary[9],
  inherits: false,
});
