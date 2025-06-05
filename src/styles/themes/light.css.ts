import { Statuses, Theme } from "@/types/themeElemet.types.ts";
import { createGlobalTheme } from "@vanilla-extract/css";
import { theme } from "@/styles/themes/contract.css.ts";
import chroma from "chroma-js";

const PRIMARY_COLOR = "#1E1E1E";
const MUTED_PRIMARY_COLOR = chroma(PRIMARY_COLOR).luminance(0.5).hex();
const status: Statuses = {
  warning: "#FFD95B",
  error: "#FF5B5B",
  success: "#6EFF5B",
};

const button: Theme["button"] = {
  primary: "#F9F9F9",
  secondary: "#EBEBEB",
  accent: PRIMARY_COLOR,
  muted: chroma(PRIMARY_COLOR).luminance(0.5).hex(),
  ...status,
};

const window: Theme["window"] = {
  primary: "white",
};

const border: Theme["border"] = {
  primary: "#EBEBEB",
  ...status,
};

const text: Theme["text"] = {
  primary: PRIMARY_COLOR,
  secondary: "#8E8E8E",
  accent: "#0B73FB",
  muted: MUTED_PRIMARY_COLOR,
  ...status,
};
const block: Theme["block"] = {
  primary: "#FFFFFF",
};
createGlobalTheme(":root", theme, {
  active: "#EBEBEB",
  border,
  button,
  text,
  window,
  block,
});
