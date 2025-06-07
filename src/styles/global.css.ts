import { createGlobalVar } from "@vanilla-extract/css";
import { vars } from "@/styles/themes";

export const controlGap = createGlobalVar("gap", {
  syntax: "<length>",
  inherits: false,
  initialValue: vars.spacing.sm,
});
