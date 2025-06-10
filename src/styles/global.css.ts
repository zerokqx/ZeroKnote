import { createGlobalVar, globalStyle } from "@vanilla-extract/css";
import { vars } from "@/styles/themes";

export const controlGap = createGlobalVar("gap", {
  syntax: "<length>",
  inherits: false,
  initialValue: vars.spacing.sm,
});
const paddingRootValue = `${vars.spacing.xs} ${vars.spacing.md}`;
export const paddingRoot = createGlobalVar("padding-root", {
  syntax: "<length>",
  inherits: false,
  initialValue: paddingRootValue,
});

globalStyle("#root", {
  vars: {
    [paddingRoot]: paddingRootValue,
  },
  height: "100%",
  borderRadius: vars.radius.sm,
  backgroundColor: vars.colors.primary[0],
  borderColor: vars.colors.primary[1],
  borderStyle: "solid",
  borderWidth: 1,
  padding: paddingRoot,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "start",
  gap: "10px",
});

globalStyle("body", {
  height: "100vh",
  padding: vars.spacing.sm,
});

globalStyle(":root", {
  vars: {
    "--background": "black",
  },
  fontFamily: "Roboto, Inter, system-ui, Arial, sans-serif",
  fontSize: "12px",
  lineHeight: "24px",
  fontWeight: 400,
  color: vars.colors.primary[9],
  fontSynthesis: "var(--background)", // но это бессмысленно, смотри ниже
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTextSizeAdjust: "100%",
});
