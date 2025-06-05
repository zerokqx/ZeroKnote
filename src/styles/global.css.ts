import { createGlobalVar } from "@vanilla-extract/css";

export const controlGap = createGlobalVar("gap", {
  syntax: "<length>",
  inherits: false,
  initialValue: "10px",
});
