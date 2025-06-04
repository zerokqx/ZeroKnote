import { Statuses, ThemeUnit } from "@/types/themeElemet.types.ts";
import { createGlobalTheme } from "@vanilla-extract/css";
import { theme } from "@/styles/themes/contract.ts";

const PRIMARY_COLOR = "#1E1E1E";

const status: Statuses = {
  warning: "#FFD95B",
  error: "#FF5B5B",
  success: "#6EFF5B",
};

const button: ThemeUnit = {
  primary: "#F9F9F9",
  secondary: "#EBEBEB",
  accent: PRIMARY_COLOR,
  muted: "#8D8D8D",
  ...status,
};
//TODO доделать тему
createGlobalTheme(":root", theme, {
  ...button,
  bg: undefined,
  border: undefined,
  button: undefined,
  text: undefined,
});
