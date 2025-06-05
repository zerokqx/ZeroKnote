import { style, styleVariants } from "@vanilla-extract/css";

/* Display Flex */
export const flex = style({
  display: "flex",
});

/* Direction */
export const direction = styleVariants({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
  rowReverse: { flexDirection: "row-reverse" },
  columnReverse: { flexDirection: "column-reverse" },
});

/* Justify Content */
export const justify = styleVariants({
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
  evenly: { justifyContent: "space-evenly" },
});
/* Align Items */
export const items = styleVariants({
  start: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  stretch: { alignItems: "stretch" },
  baseline: { alignItems: "baseline" },
});

/* Align Content (multi-line) */
export const content = styleVariants({
  start: { alignContent: "flex-start" },
  center: { alignContent: "center" },
  end: { alignContent: "flex-end" },
  between: { alignContent: "space-between" },
  around: { alignContent: "space-around" },
  evenly: { alignContent: "space-evenly" },
});

/* Flex Wrap */
export const wrap = styleVariants({
  no: { flexWrap: "nowrap" },
  yes: { flexWrap: "wrap" },
  reverse: { flexWrap: "wrap-reverse" },
});

/* Gap */
export const gap = styleVariants({
  none: { gap: "0px" },
  sm: { gap: "4px" },
  md: { gap: "8px" },
  lg: { gap: "16px" },
  xl: { gap: "24px" },
});
