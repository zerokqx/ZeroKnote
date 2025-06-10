import { createVar } from "@vanilla-extract/css";

export const buttonSize = createVar({
  syntax: "<number>",
  initialValue: "36px",
  inherits: false,
});
